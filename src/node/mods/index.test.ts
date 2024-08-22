import { assert, test } from "@hazae41/phobos"
import { Memory, base64_decode_padded, base64_encode_padded, base64url_decode_unpadded, base64url_encode_unpadded, initBundled } from "mods/index.js"

test("base64", async () => {
  await initBundled()

  const bytes = crypto.getRandomValues(new Uint8Array(256))

  const text = base64_encode_padded(new Memory(bytes))
  const text2 = Buffer.from(bytes).toString("base64")

  const bytes2 = base64_decode_padded(text).bytes

  assert(text === text2)
  assert(Buffer.from(bytes2).equals(Buffer.from(bytes)))
})

test("base64url", async () => {
  await initBundled()

  const bytes = crypto.getRandomValues(new Uint8Array(256))

  const text = base64url_encode_unpadded(new Memory(bytes))
  const text2 = Buffer.from(bytes).toString("base64url")

  const bytes2 = base64url_decode_unpadded(text).bytes

  assert(text === text2)
  assert(Buffer.from(bytes2).equals(Buffer.from(bytes)))
})