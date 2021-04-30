function xor(arg1, arg2) {
  if ((arg1 && !arg2) || (!arg1 && arg2)) {
    return true;
  } else {
    return false;
  }
}

console.log(xor(5, 0) === true);
console.log(xor(false, true) === true);
console.log(xor(1, 1) === false);
console.log(xor(true, true) === false);

/*
This was a little tricky for me, I started down the road of using
a ternary opertator. But I think that started mucking things up for me.
I should really focus on oversimplified and maybe "wordy" implementations
but the way they operate is clear to me. Then once it works, I can go back
and work on refactoring possibly.
*/