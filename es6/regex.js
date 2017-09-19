
// 正则表达式添加u修饰符时，就从编码单元操作模式切换为字符模式，就会将使用两个编码单元表示的字符当作一个字符

String.includes()
String.startsWith()
String.endsWith()
// 以上三个方法都接受两个参数，第一个是字符串，第二个是开始搜索位置的索引

String.repeat()
// 当前字符串重复一定次数后的新字符串

// y修饰符会影响正则表达式搜索过程中的sticky属性，当在字符串中开始字符串匹配时，会通知搜索从正则表达式的lastIndex属性开始进行，如果在指定位置没能匹配成功，则停止匹配。
// y修饰符会把上次匹配后面一个字符的索引保存在lastIndex中，如果该操作匹配的结果为空，则lastIndex会被重置为0
// 只有调用exec() 和test()这些正则表达式对象的方法时才会涉及lastIndex属性；调用字符串的方法，例如match则不会触发粘滞行为