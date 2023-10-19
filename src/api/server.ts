import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { customLogger } from './lib/customLogger'

export const app = new Hono()

app.use('*', logger(customLogger))
app.get('/', (c) => c.text('Hello Hono!'))

serve(app)
