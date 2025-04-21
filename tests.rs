/*
    MUTABILITY
 */

// Error: Cannot assign to a because it is immutable
fn main(x: i32) -> i32 {
    let a: i32 = 1;
    a = 2;
}

-------------

// Compiles: Make it mutable and it compiles
fn main(x: i32) -> i32 {
    let mut a: i32 = 1;
    a = 2;
}

/*
    BORROW CHECKING
 */

// Error: Can only have one mutable reference at a time
fn main(x: i32) -> i32 {
    let mut a: i32 = 1;
    let b: &mut i32 = &mut a;
    let c: &mut i32 = &mut a;
}

--------------

// Error: Cannot create an immutable reference when a mutable reference already exists
fn main(x: i32) -> i32 {
    let mut a: i32 = 1;
    let b: &mut i32 = &mut a;
    let c: &i32 = &a;
}

------------

// Compiles: it is ok to have multiple immutable references
fn main(x: i32) -> i32 {
    let mut a: i32 = 1;
    let b: &i32 = &a;
    let c: &i32 = &a;
}

-------------

// Compiles: references are scoped, so it is okay to create mutable
// references if the immutable references have gone out of scope
fn main(x: i32) -> i32 {
    let mut a: i32 = 1;
    {
        let b: &i32 = &a;
        let c: &i32 = &a;
    }
    let d: &mut i32 = &mut a;
}

/*
    OWNERSHIP AND MOVE SEMANTICS
 */

// Error: Variable 'a' has already been moved
// We cannot move a moved variable
fn main() -> i32 {
    let mut a : i32 = 1;
    let mut b : i32 = a;
    let mut c : i32 = a;
}

------------

// Error: Variable 'a' has already been moved
// We cannot make references of a moved variable
fn main() -> i32 {
    let mut a : i32 = 1;
    let mut b : i32 = a;
    let c : &i32 = &a;
}

/*
    LIFETIMES
 */

// this violates lifetime guarantee since pushing into the vector
// is widening its llifetime
fn main() -> i32 {
    let v : Vec<i32> = vec![];  
    {
        let mut a : i32 = 1;
        v.push(&a);
        
    }
}

-----------

// but this compiles fine since it is narrowing its lifetime
fn main() -> i32 {
    let mut a : i32 = 1;
    {
        let v : Vec<i32> = vec![];    
        v.push(&a);
        
    }
}
