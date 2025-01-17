// app/api/init/route.ts
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import fetch from 'node-fetch';

interface ApiResponse {
    isInstalled: boolean;
}

let isMatlabInstalled: boolean | null = null; // 初始化变量

export async function GET(request: NextRequest) {
    if (isMatlabInstalled !== null) {
        // 如果已经初始化，直接返回结果
        return NextResponse.json({ isMatlabInstalled });
    }

    try {
        const response = await fetch('http://127.0.0.1:8080/getMatlabInstalledStatus', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=UTF-8'
            }
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json() as ApiResponse;
        isMatlabInstalled = data.isInstalled; // 存储结果
        return NextResponse.json({ isMatlabInstalled });
    } catch (error) {
        console.error('Error initializing data:', error);
        return NextResponse.json({ error: 'Failed to initialize data' }, { status: 500 });
    }
}