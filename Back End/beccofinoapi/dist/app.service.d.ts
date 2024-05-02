import { OrderDto } from './messages/order.dto';
export declare class AppService {
    handleSingleOrder(order: OrderDto, confirmationCode: string): Promise<{
        status: boolean;
        message: any;
    }>;
    getOrder(confirmationId: string): Promise<OrderDto>;
    deleteOrder(confirmationId: string): Promise<{
        status: boolean;
        message: any;
    }>;
    updateOrder(confirmationId: string, updatedOrder: OrderDto): Promise<OrderDto>;
}
