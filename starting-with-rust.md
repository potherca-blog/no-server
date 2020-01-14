# Starting with Rust

## Introduction

For some time, I have been moving away from dynamic back-ends and the scripted languages they are usually build in. Instead, I have been heading more towards dynamic front-ends, fed by a lightweight API (or no back-end at all).

It occured to me that I could move away from using _any_ backend if I compiled non-javascript logic to WebAssembly. So I started looking for a language that would be a good match to create lightweight APIs in, that could also compile to WASM.

I plan to use AWS Lambda (or similar "serverless" provider). The language that most stood out to me was Rust.

## Before "Getting Started"

When I start learning a new language there are a couple of things I like to set up before even looking at the syntax.

These things are specific development tools that I have learned to rely on to create high-quality code.

They are:

- Dependency Manager (to install packages)
- Unit-testing Suite (to write unit-tests)
- Code Linter/Formatter (to write consistent code)

### Dependency Manager

- Cargo is the Rust package manager https://github.com/rust-lang/cargo/
- Uses https://crates.io/
- Manual available at https://doc.rust-lang.org/cargo/

### Unit Testing

With Rust, unit-testing and running tests is already baked into the language.

The advice from the manual is: - https://doc.rust-lang.org/cargo/guide/tests.html

> Cargo looks for tests to run in two places: in each of your `src` files and any tests in `tests/.`
> Tests in `src` files should be unit tests, tests in `tests/` should be integration-style tests.

- https://doc.rust-lang.org/book/ch11-00-testing.html
- https://doc.rust-lang.org/rust-by-example/testing/unit_testing.html
- The `cargo test` command https://doc.rust-lang.org/cargo/commands/cargo-test.html


#### Coverage

- https://github.com/mozilla/grcov
- https://github.com/kennytm/cov
- https://github.com/xd009642/tarpaulin

#### Mocks
- https://github.com/CodeSandwich/Mocktopus

#### Asserts

- https://github.com/assert-rs/assert_cmd
- https://github.com/assert-rs/assert_fs

#### Other

- https://github.com/bbqsrc/cucumber-rust
- https://github.com/utkarshkukreti/speculate.rs
- https://github.com/BurntSushi/quickcheck

### Linters/Formatters

- The Rust compile command `cargo rustc` will provide linting output - https://doc.rust-lang.org/rustc/
- `cargo fix` will "apply the suggestions made by rustc" https://github.com/rust-lang/rustfix
- Manual available at https://doc.rust-lang.org/cargo/commands/cargo-fix.html

Other "fixers" can also be used together with `cargo fix`.

- https://github.com/rust-lang/rust-clippy
- https://github.com/rust-lang/rustfmt

## Getting started

### Installing

Several sources advise using https://rustup.rs/ to install Rust.

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

This will download and run `https://static.rust-lang.org/rustup/rustup-init.sh`.
The `rustup-init.sh` script downloads and runs the `rustup-init` executable for the  platform the script was run on.
The full list of supported platform can be found at https://github.com/rust-lang/rustup#other-installation-methods.
In the end you are _still_ just downloading a random binary from some random cloud server.
If that makes you very uneasy, it is possible to compile the binary yourself, after inspectic the code, to make sure there is no malicious intent. (See https://github.com/rust-lang/rustup)

Ofcourse... This would require you to have Rust already installed, in order to compile the binary.

## Image manipulation

- https://github.com/silvia-odwyer/photon
- https://docs.rs/image/
- https://docs.rs/raster/

## Other

- https://github.com/dotenv-rs/dotenv

### Rust on AWS Lambda
- [https://github.com/awslabs/aws-lambda-rust-runtime](https://github.com/awslabs/aws-lambda-rust-runtime)
- [https://aws.amazon.com/blogs/opensource/rust-runtime-for-aws-lambda/](https://aws.amazon.com/blogs/opensource/rust-runtime-for-aws-lambda/)
- [https://github.com/LegNeato/aws-lambda-events](https://github.com/LegNeato/aws-lambda-events)
