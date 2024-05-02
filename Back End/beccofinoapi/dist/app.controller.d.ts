import { AppService } from './app.service';
import { OrderDto } from './messages/order.dto';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    orderController(order: OrderDto): Promise<{
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
