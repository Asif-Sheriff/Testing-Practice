import { app } from "../index";
import { describe, expect, it, vi } from "vitest"
import request from "supertest";


// Below is an  example  of shallow mocking where we mock the the prisma function, but this means we have to 
// individually mockout each function and every function that is part of prismaClient if we want to  use it.
// Obviously this is very tedious and impractical, the solution  to that is deep mocking where  the whole  
// prismaClient // objcet will get  mocked out

// vi.mock("../db");
describe("POST /sum", () => {
    it("should sum add 2 numbers", async () => {
        const { status, body } = await request(app).post('/sum').send({
            a: 1,
            b: 2
        })
        expect(status).toBe(200);
        expect(body).toEqual({ answer: 3, id: expect.any(Number) });
    });
})