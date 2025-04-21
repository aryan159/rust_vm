fn main(x: i32) -> i32 {
    let a: i32 = 1;
    a = 2;
}

-------------

fn f1(val : i32) {
    val
}

fn main() -> i32 {
    let mut a : i32 = 1;
    f1(a);
    a = 2;
    let b : i32 = a;
}

------------


