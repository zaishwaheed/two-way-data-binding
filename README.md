Two way data binding

in this concept, we handle inputs using react

initially the value of input=title, and initially title=''

onChange, setTitle stores the valye e.target.value, which goes in title and then in value

onChange{(e) => setTitle(e.target.value)}  ===> title = setTitle ===> value = title

In other words, setTitle = Ali,  title = Ali and value = Ali

printname function prints Form submitted by ${title} which in this case is Ali. And it prints this on console on getting triggered by onSubmit{printName}