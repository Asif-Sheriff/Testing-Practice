import { vi } from "vitest"
import { mockDeep } from "vitest-mock-extended"
import {  PrismaClient } from "../generated/prisma"


//This is the shallow mocking  example
// export const prisma = {
//     request : {
//         create : vi.fn()
//     }
// }


// The below code creates a deep mock of the prisma client object
//so now you do not need to individually mock out each function seperately.
export const prisma = mockDeep<PrismaClient>()