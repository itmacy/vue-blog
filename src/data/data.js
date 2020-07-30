const itemList = [
  {
    img: require('../assets/img/timg.jpg'),
    month: 'Jan',
    day: 5,
    title: 'Java',
    author: 'itmacy',
    desc: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程.'
  },
  {
    img: require('../assets/img/moon.jpg'),
    month: 'Feb',
    day: 8,
    title: 'Python',
    author: 'itmacy',
    desc: 'Python是一种跨平台的计算机程序设计语言。 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越多被用于独立的、大型项目的开发'
  },
  {
    img: require('../assets/img/xjy.jpg'),
    month: 'Mar',
    day: 10,
    title: 'Groovy',
    author: 'itmacy',
    desc: 'Groovy是一种基于JVM（Java虚拟机）的敏捷开发语言，它结合了Python、Ruby和Smalltalk的许多强大的特性，Groovy 代码能够与 Java 代码很好地结合，也能用于扩展现有代码。由于其运行在 JVM 上的特性，Groovy也可以使用其他非Java语言编写的库'
  },
  {
    img: require('../assets/img/timg.jpg'),
    month: 'Apr',
    day: 15,
    title: 'Scala',
    author: 'itmacy',
    desc: 'Scala是一门多范式的编程语言，一种类似java的编程语言 [1]  ，设计初衷是实现可伸缩的语言 [2]  、并集成面向对象编程和函数式编程的各种特性。'
  },
  {
    img: require('../assets/img/fox.jpeg'),
    month: 'July',
    day: 22,
    title: 'Javascript',
    author: 'itmacy',
    desc: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的高级编程语言。\n' +
      '虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，\n' +
      'JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格'
  },
  {
    img: require('../assets/img/timg.jpg'),
    month: 'Jan',
    day: 5,
    title: 'Java',
    author: 'itmacy',
    desc: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程.'
  },
  {
    img: require('../assets/img/moon.jpg'),
    month: 'Feb',
    day: 8,
    title: 'Python',
    author: 'itmacy',
    desc: 'Python是一种跨平台的计算机程序设计语言。 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越多被用于独立的、大型项目的开发'
  },
  {
    img: require('../assets/img/xjy.jpg'),
    month: 'Mar',
    day: 10,
    title: 'Groovy',
    author: 'itmacy',
    desc: 'Groovy是一种基于JVM（Java虚拟机）的敏捷开发语言，它结合了Python、Ruby和Smalltalk的许多强大的特性，Groovy 代码能够与 Java 代码很好地结合，也能用于扩展现有代码。由于其运行在 JVM 上的特性，Groovy也可以使用其他非Java语言编写的库'
  },
  {
    img: require('../assets/img/timg.jpg'),
    month: 'Apr',
    day: 15,
    title: 'Scala',
    author: 'itmacy',
    desc: 'Scala是一门多范式的编程语言，一种类似java的编程语言 [1]  ，设计初衷是实现可伸缩的语言 [2]  、并集成面向对象编程和函数式编程的各种特性。'
  },
  {
    img: require('../assets/img/fox.jpeg'),
    month: 'July',
    day: 22,
    title: 'Javascript',
    author: 'itmacy',
    desc: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的高级编程语言。\n' +
      '虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，\n' +
      'JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格'
  },
  {
    img: require('../assets/img/timg.jpg'),
    month: 'Jan',
    day: 5,
    title: 'Java',
    author: 'itmacy',
    desc: 'Java是一门面向对象编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程.'
  },
  {
    img: require('../assets/img/moon.jpg'),
    month: 'Feb',
    day: 8,
    title: 'Python',
    author: 'itmacy',
    desc: 'Python是一种跨平台的计算机程序设计语言。 是一个高层次的结合了解释性、编译性、互动性和面向对象的脚本语言。最初被设计用于编写自动化脚本(shell)，随着版本的不断更新和语言新功能的添加，越多被用于独立的、大型项目的开发'
  },
  {
    img: require('../assets/img/xjy.jpg'),
    month: 'Mar',
    day: 10,
    title: 'Groovy',
    author: 'itmacy',
    desc: 'Groovy是一种基于JVM（Java虚拟机）的敏捷开发语言，它结合了Python、Ruby和Smalltalk的许多强大的特性，Groovy 代码能够与 Java 代码很好地结合，也能用于扩展现有代码。由于其运行在 JVM 上的特性，Groovy也可以使用其他非Java语言编写的库'
  },
  {
    img: require('../assets/img/timg.jpg'),
    month: 'Apr',
    day: 15,
    title: 'Scala',
    author: 'itmacy',
    desc: 'Scala是一门多范式的编程语言，一种类似java的编程语言 [1]  ，设计初衷是实现可伸缩的语言 [2]  、并集成面向对象编程和函数式编程的各种特性。'
  },
  {
    img: require('../assets/img/fox.jpeg'),
    month: 'July',
    day: 22,
    title: 'Javascript',
    author: 'itmacy',
    desc: 'JavaScript（简称“JS”） 是一种具有函数优先的轻量级，解释型或即时编译型的高级编程语言。\n' +
      '虽然它是作为开发Web页面的脚本语言而出名的，但是它也被用到了很多非浏览器环境中，\n' +
      'JavaScript 基于原型编程、多范式的动态脚本语言，并且支持面向对象、命令式和声明式（如函数式编程）风格'
  }
]
export default itemList
