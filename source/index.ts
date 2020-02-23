import { green } from 'chalk'

export function shoutSuccess(message: string, label: string = '> Success!') {
  return console.log(`${green(label)} ${message}`)
}
