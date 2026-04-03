"use server"

import { signOut } from '@/auth'

export default async function DoSignOut() {
 
    await signOut();
}
