import type { RegisterForm } from './types.server'
import { prisma } from './prisma.server'
import { json } from '@remix-run/node'
import { createUser } from './user.server'

export async function register(user: RegisterForm) {
    const exists = await prisma.customer.count({ where: { email: user.email } })
    if (exists) {
      return json({ error: `User already exists with that email` }, { status: 400 })
    }

    const newUser = await createUser(user)
    if (!newUser) {
      return json(
        {
          error: `El correo que escribiste no es válido. Intentalo de nuevo. `,
          fields: { email: user.email },
        },
        { status: 400 },
      )
    }
    return newUser;
  }