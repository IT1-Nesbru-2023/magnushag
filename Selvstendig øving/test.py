from pylab import*

def f(x):
    return 2*x**2

y_verdi = []
x_verdi = []

for i in range(-10, 11):
    m = f(i)
    y_verdi.append(m)
    x_verdi.append(i)

plot(x_verdi, y_verdi)
show()


