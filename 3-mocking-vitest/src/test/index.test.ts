import { app } from "../index";
import { describe, expect, it } from "@jest/globals"
import request from "supertest";

describe("POST/SUM",()=>{
    it("should return sum of two numbes", async()=>{
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        });

        expect(res.status).toBe(200);
    })
})