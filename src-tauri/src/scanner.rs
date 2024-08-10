use std::thread::current;

pub struct Scanner {
    current: usize,
    buffer: Vec<u8>,
}

impl From<Vec<u8>> for Scanner {
    fn from(value: Vec<u8>) -> Self {
        Scanner {
            buffer: value,
            current: 0,
        }
    }
}

impl Scanner {
    fn advance(&mut self, by: usize) {
        debug_assert!(self.current <= self.buffer.len());

        self.current += by;
    }

    pub fn read_byte(&mut self) -> u8 {
        self.advance(1);

        *self.buffer.get(self.current - 1).unwrap()
    }

    pub fn read_short(&mut self) -> u16 {
        self.advance(2);

        ((self.buffer[self.current - 2] as u16) << 8) | self.buffer[self.current - 1] as u16
    }
}

#[cfg(test)]
mod scanner_tests {
    use super::Scanner;

    #[test]
    fn should_read_int8() {
        let mut scanner = Scanner::from(vec![128]);

        assert_eq!(scanner.read_byte(), 128);
    }

    #[test]
    fn should_read_short() {
        let mut scanner = Scanner::from(vec![0x0f, 0x0f]);

        assert_eq!(scanner.read_short(), 3855);
    }
}
