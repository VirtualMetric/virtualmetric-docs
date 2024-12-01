---
pagination_prev: mock/README
pagination_next: null
---

# Code

The following is a sample **Go** code:

```Go title="/usr/src/misc/sum.go"
func linear(X float, N int) (r float) {
	var n = N
	for n > 0 {
		r = 1.0 + r * X
		n --
	}
	return
}
```

This code solves the problem

$$\sum_{0\le i<N}{i\cdot X^{i}}$$

by transforming it into

$$\sum_{n\le i<N}{(i-n)\cdot X^{i-n}}$$
