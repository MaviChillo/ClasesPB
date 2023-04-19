import twilio from 'twilio'
import config from '../config.js'

export const client = twilio(config.twilio_sid)