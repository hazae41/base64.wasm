extern crate alloc;

use alloc::string::String;

use wasm_bindgen::prelude::*;

use memory_wasm::Memory;

#[wasm_bindgen]
pub fn base64_encode_padded(bytes: &Memory) -> String {
    use base64ct::{Base64, Encoding};

    Base64::encode_string(&bytes.inner)
}

#[wasm_bindgen]
pub fn base64_decode_padded(text: &str) -> Result<Memory, JsError> {
    use base64ct::{Base64, Encoding};

    Base64::decode_vec(text)
        .map(Memory::new)
        .map_err(|_| JsError::new("base64_decode_padded"))
}
