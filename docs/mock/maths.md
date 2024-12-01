---
pagination_prev: mock/README
pagination_next: null
---

# Maths

Sample LaTeX code.

## The Problem

This is a solution for the following problem:

$$
\begin{align*}
	S=\sum_{0\le i<N}{i\cdot X^i}
\end{align*}
$$

## Reformulation

We will start by first redefining the sum as

$$
\begin{align*}
	S_n=\sum_{n\le i<N}{(i-n)\cdot X^{i-n}}
\end{align*}
$$

and then inductively transform it as

$$
\begin{align*}
S_{n-1}
=&\sum_{n-1\le i<N}{(i-(n-1))\cdot X^{i-(n-1)}}\\
=&\sum_{n-1\le i<N}{(i-n+1)\cdot X^{i-n+1}}\\
=&\Bigg(\sum_{n-1\le i<N}{(i-n)\cdot X^{i-n}+X^{i-n}}\Bigg)\cdot X\\
=&\Bigg(\sum_{n-1\le i<N}{(i-n)\cdot X^{i-n}}+\sum_{n-1\le i<N}{X^{i-n}}\Bigg)\cdot X\\
=&\Bigg(-\frac{1}{X}+\sum_{n\le i<N}{(i-n)\cdot X^{i-n}}+\frac{1}{X}+\sum_{n\le i<N}{X^{i-n}}\Bigg)\cdot X\\
=&\Bigg(S_n+\sum_{n\le i<N}{X^{i-n}}\Bigg)\cdot X\\
=&\Bigg(S_n+T_n\Bigg)\cdot X
\end{align*}
$$

where

$$
\begin{align*}
	T_n=\sum_{n\le i<N}{X^{i-n}}
\end{align*}
$$

## Algorithm

Here is the solution in **Go**.

```Go
func linear(X float, N int) (s float) {
	var n = N
	var t = 1.0
	for n > 0 {
		s = s + t
		t = t * X
		n --
	}
	return
}
```
