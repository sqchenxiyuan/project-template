use wasm_bindgen::prelude::*;

#[wasm_bindgen(start)]
pub fn run() {
    hello();
}

// When the `wee_alloc` feature is enabled, use `wee_alloc` as the global
// allocator.
#[cfg(feature = "wee_alloc")]
#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
extern {
    #[wasm_bindgen(js_namespace = console)]
    fn log(s: &str);

    fn alert(s: &str);
}

macro_rules! console_log {
    // Note that this is using the `log` function imported above during
    // `bare_bones`
    ($($t:tt)*) => (log(&format_args!($($t)*).to_string()))
}

#[wasm_bindgen]
pub fn hello() {
    console_log!("Hello");
    web_sys::console::log_1(&"this.is".into());
    log("a template");
}

#[wasm_bindgen]
pub fn alert_text(x: &str){
    alert(x);
}

#[wasm_bindgen]
pub fn add(x: f64, y: f64) -> f64 {
    x + y
}