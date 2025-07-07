import { app } from "../index";
import { describe, expect, it, vi } from "vitest"
import request from "supertest";


// Below is an  example  of shallow mocking where we mock the the prisma function, but using this we have to 
// individually mockout each function, the solution  to that is deep mocking where  the whole  prismaClient 
// objcet will get  mocked out

vi.mock("../db", () => {
    return {
        prisma: { 
            request: {
                create: vi.fn()
            }
        }
    }
});

describe("POST/SUM",()=>{
    it("should return sum of two numbes", async()=>{
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        });

        

        expect(res.body.result).toBe(3);
    })
})