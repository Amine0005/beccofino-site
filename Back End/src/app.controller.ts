import { Body, Controller, Get, Logger, Param, Post, Delete, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { OrderDto } from './messages/order.dto';
import * as crypto from 'crypto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post("sendorder")
  async orderController(@Body() order: OrderDto) {
    Logger.debug(order);
    const confirmationCode = generateHash(order);
    return this.appService.handleSingleOrder(order, confirmationCode);
  }

  @Get('orders/get/:confirmationId')
  getOrder(@Param('confirmationId') confirmationId: string): Promise<OrderDto> {
    return this.appService.getOrder(confirmationId);
  }

  @Delete('orders/delete/:confirmationId')
  deleteOrder(@Param('confirmationId') confirmationId: string){
    return this.appService.deleteOrder(confirmationId);
  } 
  
  @Put('orders/update/:confirmationId')
  updateOrder(@Param('confirmationId') confirmationId: string, @Body() updatedOrder: OrderDto): Promise<OrderDto> {
    return this.appService.updateOrder(confirmationId, updatedOrder);
  }
}

function generateHash(data: any): string {
  const hash = crypto.createHash('sha256');
  hash.update(JSON.stringify(data));
  return hash.digest('hex');
}
