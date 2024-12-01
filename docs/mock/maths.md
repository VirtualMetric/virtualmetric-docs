---
pagination_prev: mock/README
pagination_next: null
---

# Maths

This is a solution for the computational problem formulated as

$$
\begin{align*}
	S_0=\sum_{0\le i<N}{i\cdot X^i}
\end{align*}
$$

by first redefining it as

$$
\begin{align*}
	S_n=\sum_{n\le i<N}{(i-n)\cdot X^{i-n}}
\end{align*}
$$

then by inductively transforming it as

$$
\begin{align*}
S_{n-1}
=&\sum_{n-1\le i<N}{(i-(n-1))\cdot X^{i-(n-1)}}\\
=&\sum_{n-1\le i<N}{(i-n+1)\cdot X^{i-n+1}}\\
=&\Bigg(\sum_{n-1\le i<N}{(i-n)\cdot X^{i-n}+X^{i-n}}\Bigg)\cdot X\\
=&\Bigg(\sum_{n-1\le i<N}{(i-n)\cdot X^{i-n}}+\sum_{n-1\le i<N}{X^{i-n}}\Bigg)\cdot X\\
=&\Bigg(\sum_{n\le i<N}{(i-n)\cdot X^{i-n}}-\frac{1}{X}+\sum_{n\le i<N}{X^{i-n}}-\frac{1}{X}\Bigg)\cdot X\\
=&\Bigg(S_n+\sum_{n\le i<N}{X^{i-n}}-\frac{2}{X}\Bigg)\cdot X\\
=&\Bigg(S_n+T_n-\frac{2}{X}\Bigg)\cdot X\\
=&\Bigg(S_n+T_n\Bigg)\cdot X-2
\end{align*}
$$

where

$$
\begin{align*}
	T_n=\sum{n\le i<N}{X^{i-n}}
\end{align*}
$$

And here is the solution in **Go**. Just replace $S$ and $T$ with $s$ and $t$.

```Go
func linear(X float, N int) (s float) {
	var n = N
	var t = 0.0
	for n > 0 {
		t = 1.0 + t * X
		s = (s + t) * X - 2.0
		n --
	}
	return
}
```



