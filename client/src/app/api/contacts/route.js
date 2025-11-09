import { google } from "googleapis";
import { NextResponse } from "next/server";


export async function GET() {
    try {
        const auth = new google.auth.GoogleAuth({
            credentials: {
                client_email: process.env.GOOGLE_CLIENT_EMAIL,
                private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n")
            },
            scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
        })

        const client = await auth.getClient();
        const sheets = google.sheets({ version: "v4", auth: client });

        const spreadsheetId = process.env.GOOGLE_SHEET_ID;

        const range = "Contacts!A:E";

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
        const items = rows.slice(1).map((row) => {
            let item = {}

            headers.forEach((header, idx) => {
                item[header.trim()] = row[idx] || ""
            })

            return item
        }).filter((i) => {
            return i.title.trim() !== ""
        })

        const contacts = [];


        items?.forEach((item, idx) => {

            const exist = contacts?.find((i) => i?.category === item?.category)

            if (exist) {
                exist?.items?.push(item);
            }
            else {
                contacts?.push({
                    category: item?.category,
                    items: [item]
                })
            }
        })

        return NextResponse.json({
            success: true,
            status: 200,
            message: "Contacts Fetched Successfully.",
            data: contacts
        })

    } catch (error) {
        return NextResponse.json({
            success: false,
            status: 500,
            message: "Failed to fetch contacts!",
            data: {}
        })

    }
}