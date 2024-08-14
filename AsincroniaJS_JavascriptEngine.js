/* Como funciona Javascript Engine en el navegador y apra esto tenemos
dos conceptos el memory heap y el call stack, el memory heap es el 
espacio en donde se va a guardar todas las variables, funciones, objetos que se vayan creando
en JS y el segundo concepto de call stack es como una fila en donde
se van a empezar a llamar cada una de las funciones que se van a ejecutar
esto tambien se le puede llamar programacion simple  ya que va trabajando
una tarea a la vez. esto es proque javascript funciona trabajando una tarea
a la vez y eso funciona en el call stack.
otro concepto es el stack overflow qu es cuando llevamos el stack de tareas
a un punto en que se excede el numero o la memoria que tiene permitida,
nuestro navegador literal deja de funcionar ya que se sobrepasa esa memoria.*/

/*Javascript funciona de forma sincrona pero hay forma de hacerlo que trabaje de forma asincrona, que es decir de forma simultanea de ejecutar las tareas,
para esto javascript usa call back, web api y una cola o queue.
Web api es lo que permite que javascript funcione de forma asincrona, el primer paso es que mientras en el call stack este va sacando las funciones o tareas
y la envia a la web api esta la va procesando y cuando ya la tenga resuelta la envia a la cola de espera o queue luego el event loop pregunta al call back si tiene
memoria o no, en el caso que si lo tenga va a tomar lo que este en la cola y lo va a llevar a la memoria para terminar de ejecutar y si no tiene espacio lo va a mantener
en la cola de espera, */
