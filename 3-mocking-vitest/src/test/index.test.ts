import { app } from "../index";
import { describe, expect, it, vi } from "vitest"
import request from "supertest";


// Below is an  example  of shallow mocking where we mock the the prisma function, but this means we have to 
// individually mockout each function and every function that is part of prismaClient if we want to  use it.
// Obviously this is very tedious and impractical, the solution  to that is deep mocking where  the whole  
// prismaClient // objcet will get  mocked out

vi.mock("../db");

describe("POST/SUM",()=>{
    it("should return sum of two numbes", async()=>{
        const res = await request(app).post('/sum').send({
            a: 1,
            b: 2
        });

        

        expect(res.body.result).toBe(3);
    })
})