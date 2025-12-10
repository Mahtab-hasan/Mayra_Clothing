import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db('mayra-clothing');
    const products = await db.collection('products').find({}).toArray();
    
    return NextResponse.json(products);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch products' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const product = await request.json();
    const client = await clientPromise;
    const db = client.db('mayra-clothing');
    
    const result = await db.collection('products').insertOne(product);
    return NextResponse.json(result);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
} 