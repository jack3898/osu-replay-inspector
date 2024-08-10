use crate::parser::Parser;

#[tauri::command]
pub fn parse_replay(buffer: Vec<u8>) -> String {
    let parser = Parser::default();

    "todo".into()
}
