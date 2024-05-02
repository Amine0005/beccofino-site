import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import mongoose from "mongoose";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.listen(3000);
}
bootstrap();


mongoose.connect('mongodb://127.0.0.1:27017', { });

var conn = mongoose.connection;

conn.on('connected', function() {
    console.log('database is connected successfully');
});
conn.on('disconnected',function(){
    console.log('database is disconnected successfully');
})

conn.on('error', console.error.bind(console, 'connection error:'));

export default conn;
