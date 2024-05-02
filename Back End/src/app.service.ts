import { Injectable, NotFoundException } from '@nestjs/common';
import OrderModel, { OrderDto } from './messages/order.dto';

@Injectable()
export class AppService {
  async handleSingleOrder(order: OrderDto, confirmationCode: string): Promise<{ status: boolean, message: any }> {
    const newOrder = new OrderModel({ confirmationCode: confirmationCode, ...order });
    const savedOrder = await newOrder.save();

    // Genera l'URL della pagina di conferma dell'ordine con il parametro "confirmationLink"
    const confirmationPageUrl = `http://127.0.0.1:5500/order-confirmation.html?confirmationId=${confirmationCode}`;

    // Reindirizza l'utente alla pagina di conferma dell'ordine
    return { status: true, message: confirmationPageUrl };
  }

  async getOrder(confirmationId: string): Promise<OrderDto> {
    const order = await OrderModel.findOne({ confirmationCode: confirmationId }).exec();
    if (!order) {
      return null;
    }
    return order;
  }

  async deleteOrder(confirmationId: string): Promise<{ status: boolean, message: any }> {
    const confirmationPageUrl = `http://127.0.0.1:5500/order-cancellation.html?confirmationId=${confirmationId}`;
    const order = await OrderModel.findOneAndDelete({ confirmationCode: confirmationId }).exec();
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return { status: true, message: confirmationPageUrl };
  }

  async updateOrder(confirmationId: string, updatedOrder: OrderDto): Promise<OrderDto> {
    const order = await OrderModel.findOneAndUpdate({ confirmationCode: confirmationId }, updatedOrder, { new: true }).exec();
    if (!order) {
      throw new NotFoundException('Order not found');
    }
    return order;
  }
}


