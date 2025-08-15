import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dbPath = path.resolve(process.cwd(), 'db.json');

const getUsers = () => {
  const data = fs.readFileSync(dbPath);
  return JSON.parse(data);
};

const saveUsers = (users) => {
  fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
};

export async function POST(req) {
  const { name, email, password, action } = await req.json();

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return NextResponse.json({ error: 'Invalid email format' }, { status: 400 });
  }

  const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return NextResponse.json({ error: 'Password must be at least 8 characters long and contain at least one number and one special character.' }, { status: 400 });
  }
  
  const { users } = getUsers();

  if (action === 'signup') {
    if (users.find(user => user.email === email)) {
      return NextResponse.json({ error: 'User already exists' }, { status: 400 });
    }
    const newUser = { id: Date.now(), name, email, password };
    users.push(newUser);
    saveUsers({ users });
    return NextResponse.json({ message: 'User created successfully' });
  }

  if (action === 'login') {
    const user = users.find(user => user.email === email && user.password === password);
    if (user) {
      return NextResponse.json({ user: { id: user.id, name: user.name, email: user.email } });
    } else {
      return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });
    }
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}