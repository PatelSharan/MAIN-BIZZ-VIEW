import { google } from "googleapis";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const auth = new google.auth.GoogleAuth({
            keyFile: "bizzview-service-acc-key.json",
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        })

        const client = await auth.getClient();
        const sheets = google.sheets({ version: "v4", auth: client });

        const spreadsheetId = "1u1ria0M3hOPO8a1IePpkxw1DIMth12CxINpPZn8VyU8";

        const range = "Products!A:E";

        const response = await sheets.spreadsheets.values.get({
            spreadsheetId,
            range,
        });
        const rows = response.data.values || [];

        if (rows.length === 0) {
            return NextResponse.json({
                status: 500,
                success: false,
                message: "Data Not Found",
                data: {},
            });
        }


        const headers = rows[0];
        const products = rows.slice(1).map((row) => {
            const item = {};
            headers.forEach((header, index) => {
                item[header.trim()] = row[index] || "";
            });
            return item;
        }).filter((product) => {
            return product?.name && product.name.trim() !== ""
        })

        return NextResponse.json({
            status: 200,
            success: true,
            message: "Products Fetched Successfully.",
            data: products,
        });

    } catch (error) {
        return NextResponse.json({
            status: 500,
            success: false,
            message: "Failed to fetch products",
            data: {},
        })
    }
}