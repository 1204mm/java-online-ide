import { javaKeywords, javaTypes } from './javaConfig'

const classMethods = {
  'Math': [
    { name: 'abs', insertText: 'abs(${1:a})', detail: 'int abs(int a) - 绝对值' },
    { name: 'max', insertText: 'max(${1:a}, ${2:b})', detail: 'int max(int a, int b) - 最大值' },
    { name: 'min', insertText: 'min(${1:a}, ${2:b})', detail: 'int min(int a, int b) - 最小值' },
    { name: 'pow', insertText: 'pow(${1:a}, ${2:b})', detail: 'double pow(double a, double b) - 幂运算' },
    { name: 'sqrt', insertText: 'sqrt(${1:a})', detail: 'double sqrt(double a) - 平方根' },
    { name: 'random', insertText: 'random()', detail: 'double random() - 随机数[0,1)' },
    { name: 'floor', insertText: 'floor(${1:a})', detail: 'double floor(double a) - 向下取整' },
    { name: 'ceil', insertText: 'ceil(${1:a})', detail: 'double ceil(double a) - 向上取整' },
    { name: 'round', insertText: 'round(${1:a})', detail: 'long round(double a) - 四舍五入' },
    { name: 'sin', insertText: 'sin(${1:a})', detail: 'double sin(double a) - 正弦' },
    { name: 'cos', insertText: 'cos(${1:a})', detail: 'double cos(double a) - 余弦' },
    { name: 'tan', insertText: 'tan(${1:a})', detail: 'double tan(double a) - 正切' },
    { name: 'log', insertText: 'log(${1:a})', detail: 'double log(double a) - 自然对数' },
    { name: 'log10', insertText: 'log10(${1:a})', detail: 'double log10(double a) - 以10为底对数' },
    { name: 'exp', insertText: 'exp(${1:a})', detail: 'double exp(double a) - e的幂' },
  ],
  'String': [
    { name: 'length', insertText: 'length()', detail: 'int length() - 字符串长度' },
    { name: 'charAt', insertText: 'charAt(${1:index})', detail: 'char charAt(int index) - 获取字符' },
    { name: 'substring', insertText: 'substring(${1:beginIndex})', detail: 'String substring(int beginIndex) - 子字符串' },
    { name: 'indexOf', insertText: 'indexOf(${1:str})', detail: 'int indexOf(String str) - 查找位置' },
    { name: 'lastIndexOf', insertText: 'lastIndexOf(${1:str})', detail: 'int lastIndexOf(String str) - 最后出现位置' },
    { name: 'contains', insertText: 'contains(${1:s})', detail: 'boolean contains(CharSequence s) - 是否包含' },
    { name: 'startsWith', insertText: 'startsWith(${1:prefix})', detail: 'boolean startsWith(String prefix) - 是否以...开头' },
    { name: 'endsWith', insertText: 'endsWith(${1:suffix})', detail: 'boolean endsWith(String suffix) - 是否以...结尾' },
    { name: 'trim', insertText: 'trim()', detail: 'String trim() - 去除首尾空白' },
    { name: 'strip', insertText: 'strip()', detail: 'String strip() - 去除首尾空白(Unicode)' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'isBlank', insertText: 'isBlank()', detail: 'boolean isBlank() - 是否为空白' },
    { name: 'toLowerCase', insertText: 'toLowerCase()', detail: 'String toLowerCase() - 转小写' },
    { name: 'toUpperCase', insertText: 'toUpperCase()', detail: 'String toUpperCase() - 转大写' },
    { name: 'replace', insertText: 'replace(${1:old}, ${2:new})', detail: 'String replace(...) - 替换' },
    { name: 'replaceAll', insertText: 'replaceAll(${1:regex}, ${2:replacement})', detail: 'String replaceAll(String regex, String replacement) - 正则替换' },
    { name: 'split', insertText: 'split(${1:regex})', detail: 'String[] split(String regex) - 分割' },
    { name: 'equals', insertText: 'equals(${1:obj})', detail: 'boolean equals(Object obj) - 比较' },
    { name: 'equalsIgnoreCase', insertText: 'equalsIgnoreCase(${1:str})', detail: 'boolean equalsIgnoreCase(String str) - 忽略大小写比较' },
    { name: 'compareTo', insertText: 'compareTo(${1:str})', detail: 'int compareTo(String str) - 比较' },
    { name: 'toCharArray', insertText: 'toCharArray()', detail: 'char[] toCharArray() - 转字符数组' },
    { name: 'getBytes', insertText: 'getBytes()', detail: 'byte[] getBytes() - 转字节数组' },
    { name: 'valueOf', insertText: 'valueOf(${1:obj})', detail: 'static String valueOf(Object obj) - 转字符串' },
    { name: 'format', insertText: 'format(${1:format}, ${2:args})', detail: 'static String format(String format, Object... args) - 格式化' },
    { name: 'join', insertText: 'join(${1:delimiter}, ${2:elements})', detail: 'static String join(...) - 连接' },
    { name: 'repeat', insertText: 'repeat(${1:count})', detail: 'String repeat(int count) - 重复' },
  ],
  'Integer': [
    { name: 'parseInt', insertText: 'parseInt(${1:s})', detail: 'static int parseInt(String s) - 解析整数' },
    { name: 'valueOf', insertText: 'valueOf(${1:s})', detail: 'static Integer valueOf(String s) - 转Integer' },
    { name: 'toString', insertText: 'toString()', detail: 'String toString() - 转字符串' },
    { name: 'intValue', insertText: 'intValue()', detail: 'int intValue() - 获取int值' },
    { name: 'compareTo', insertText: 'compareTo(${1:anotherInteger})', detail: 'int compareTo(Integer anotherInteger) - 比较' },
    { name: 'max', insertText: 'max(${1:a}, ${2:b})', detail: 'static int max(int a, int b) - 最大值' },
    { name: 'min', insertText: 'min(${1:a}, ${2:b})', detail: 'static int min(int a, int b) - 最小值' },
    { name: 'sum', insertText: 'sum(${1:a}, ${2:b})', detail: 'static int sum(int a, int b) - 求和' },
    { name: 'toBinaryString', insertText: 'toBinaryString(${1:i})', detail: 'static String toBinaryString(int i) - 转二进制' },
    { name: 'toHexString', insertText: 'toHexString(${1:i})', detail: 'static String toHexString(int i) - 转十六进制' },
  ],
  'Long': [
    { name: 'parseLong', insertText: 'parseLong(${1:s})', detail: 'static long parseLong(String s) - 解析长整数' },
    { name: 'valueOf', insertText: 'valueOf(${1:s})', detail: 'static Long valueOf(String s) - 转Long' },
    { name: 'longValue', insertText: 'longValue()', detail: 'long longValue() - 获取long值' },
    { name: 'max', insertText: 'max(${1:a}, ${2:b})', detail: 'static long max(long a, long b) - 最大值' },
    { name: 'min', insertText: 'min(${1:a}, ${2:b})', detail: 'static long min(long a, long b) - 最小值' },
    { name: 'sum', insertText: 'sum(${1:a}, ${2:b})', detail: 'static long sum(long a, long b) - 求和' },
  ],
  'Double': [
    { name: 'parseDouble', insertText: 'parseDouble(${1:s})', detail: 'static double parseDouble(String s) - 解析双精度' },
    { name: 'valueOf', insertText: 'valueOf(${1:s})', detail: 'static Double valueOf(String s) - 转Double' },
    { name: 'doubleValue', insertText: 'doubleValue()', detail: 'double doubleValue() - 获取double值' },
    { name: 'isNaN', insertText: 'isNaN(${1:v})', detail: 'static boolean isNaN(double v) - 是否NaN' },
    { name: 'isInfinite', insertText: 'isInfinite(${1:v})', detail: 'static boolean isInfinite(double v) - 是否无穷' },
    { name: 'sum', insertText: 'sum(${1:a}, ${2:b})', detail: 'static double sum(double a, double b) - 求和' },
    { name: 'max', insertText: 'max(${1:a}, ${2:b})', detail: 'static double max(double a, double b) - 最大值' },
    { name: 'min', insertText: 'min(${1:a}, ${2:b})', detail: 'static double min(double a, double b) - 最小值' },
  ],
  'Scanner': [
    { name: 'next', insertText: 'next()', detail: 'String next() - 读取下一个字符串' },
    { name: 'nextLine', insertText: 'nextLine()', detail: 'String nextLine() - 读取一行' },
    { name: 'nextInt', insertText: 'nextInt()', detail: 'int nextInt() - 读取整数' },
    { name: 'nextLong', insertText: 'nextLong()', detail: 'long nextLong() - 读取长整数' },
    { name: 'nextDouble', insertText: 'nextDouble()', detail: 'double nextDouble() - 读取双精度' },
    { name: 'nextFloat', insertText: 'nextFloat()', detail: 'float nextFloat() - 读取浮点数' },
    { name: 'nextBoolean', insertText: 'nextBoolean()', detail: 'boolean nextBoolean() - 读取布尔值' },
    { name: 'hasNext', insertText: 'hasNext()', detail: 'boolean hasNext() - 是否有下一个' },
    { name: 'hasNextInt', insertText: 'hasNextInt()', detail: 'boolean hasNextInt() - 是否有下一个整数' },
    { name: 'hasNextLine', insertText: 'hasNextLine()', detail: 'boolean hasNextLine() - 是否有下一行' },
    { name: 'close', insertText: 'close()', detail: 'void close() - 关闭' },
    { name: 'useDelimiter', insertText: 'useDelimiter(${1:pattern})', detail: 'Scanner useDelimiter(String pattern) - 设置分隔符' },
  ],
  'System': [
    { name: 'out.println', insertText: 'out.println(${1:args})', detail: 'PrintStream out.println() - 打印输出' },
    { name: 'out.print', insertText: 'out.print(${1:args})', detail: 'PrintStream out.print() - 打印不换行' },
    { name: 'out.printf', insertText: 'out.printf(${1:format}, ${2:args})', detail: 'PrintStream out.printf() - 格式化输出' },
    { name: 'err.println', insertText: 'err.println(${1:args})', detail: 'PrintStream err.println() - 错误输出' },
    { name: 'in.read', insertText: 'in.read()', detail: 'int in.read() - 读取输入' },
    { name: 'currentTimeMillis', insertText: 'currentTimeMillis()', detail: 'static long currentTimeMillis() - 当前时间毫秒' },
    { name: 'nanoTime', insertText: 'nanoTime()', detail: 'static long nanoTime() - 当前时间纳秒' },
    { name: 'exit', insertText: 'exit(${1:status})', detail: 'static void exit(int status) - 退出程序' },
    { name: 'arraycopy', insertText: 'arraycopy(${1:src}, ${2:srcPos}, ${3:dest}, ${4:destPos}, ${5:length})', detail: 'static void arraycopy(...) - 数组复制' },
    { name: 'gc', insertText: 'gc()', detail: 'static void gc() - 垃圾回收' },
  ],
  'Arrays': [
    { name: 'sort', insertText: 'sort(${1:a})', detail: 'static void sort(int[] a) - 排序' },
    { name: 'binarySearch', insertText: 'binarySearch(${1:a}, ${2:key})', detail: 'static int binarySearch(int[] a, int key) - 二分查找' },
    { name: 'fill', insertText: 'fill(${1:a}, ${2:val})', detail: 'static void fill(int[] a, int val) - 填充' },
    { name: 'copyOf', insertText: 'copyOf(${1:original}, ${2:newLength})', detail: 'static int[] copyOf(int[] original, int newLength) - 复制' },
    { name: 'copyOfRange', insertText: 'copyOfRange(${1:original}, ${2:from}, ${3:to})', detail: 'static int[] copyOfRange(...) - 范围复制' },
    { name: 'equals', insertText: 'equals(${1:a}, ${2:a2})', detail: 'static boolean equals(int[] a, int[] a2) - 比较' },
    { name: 'toString', insertText: 'toString(${1:a})', detail: 'static String toString(int[] a) - 转字符串' },
    { name: 'deepToString', insertText: 'deepToString(${1:a})', detail: 'static String deepToString(Object[] a) - 深度转字符串' },
    { name: 'asList', insertText: 'asList(${1:a})', detail: 'static <T> List<T> asList(T... a) - 转List' },
    { name: 'stream', insertText: 'stream(${1:array})', detail: 'static IntStream stream(int[] array) - 转流' },
  ],
  'Collections': [
    { name: 'sort', insertText: 'sort(${1:list})', detail: 'static void sort(List<T> list) - 排序' },
    { name: 'reverse', insertText: 'reverse(${1:list})', detail: 'static void reverse(List<?> list) - 反转' },
    { name: 'shuffle', insertText: 'shuffle(${1:list})', detail: 'static void shuffle(List<?> list) - 随机打乱' },
    { name: 'binarySearch', insertText: 'binarySearch(${1:list}, ${2:key})', detail: 'static int binarySearch(List<? extends T> list, T key) - 二分查找' },
    { name: 'max', insertText: 'max(${1:coll})', detail: 'static T max(Collection<? extends T> coll) - 最大值' },
    { name: 'min', insertText: 'min(${1:coll})', detail: 'static T min(Collection<? extends T> coll) - 最小值' },
    { name: 'fill', insertText: 'fill(${1:list}, ${2:obj})', detail: 'static void fill(List<? super T> list, T obj) - 填充' },
    { name: 'copy', insertText: 'copy(${1:dest}, ${2:src})', detail: 'static void copy(List<? super T> dest, List<? extends T> src) - 复制' },
    { name: 'swap', insertText: 'swap(${1:list}, ${2:i}, ${3:j})', detail: 'static void swap(List<?> list, int i, int j) - 交换' },
    { name: 'frequency', insertText: 'frequency(${1:c}, ${2:o})', detail: 'static int frequency(Collection<?> c, Object o) - 出现次数' },
    { name: 'addAll', insertText: 'addAll(${1:c}, ${2:elements})', detail: 'static boolean addAll(Collection<? super T> c, T... elements) - 添加所有' },
    { name: 'emptyList', insertText: 'emptyList()', detail: 'static <T> List<T> emptyList() - 空列表' },
    { name: 'emptySet', insertText: 'emptySet()', detail: 'static <T> Set<T> emptySet() - 空集合' },
    { name: 'emptyMap', insertText: 'emptyMap()', detail: 'static <K,V> Map<K,V> emptyMap() - 空映射' },
  ],
  'List': [
    { name: 'add', insertText: 'add(${1:e})', detail: 'boolean add(E e) - 添加元素' },
    { name: 'add(index, element)', insertText: 'add(${1:index}, ${2:element})', detail: 'void add(int index, E element) - 指定位置添加' },
    { name: 'get', insertText: 'get(${1:index})', detail: 'E get(int index) - 获取元素' },
    { name: 'set', insertText: 'set(${1:index}, ${2:element})', detail: 'E set(int index, E element) - 设置元素' },
    { name: 'remove', insertText: 'remove(${1:index})', detail: 'E remove(int index) - 删除元素' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
    { name: 'contains', insertText: 'contains(${1:o})', detail: 'boolean contains(Object o) - 是否包含' },
    { name: 'indexOf', insertText: 'indexOf(${1:o})', detail: 'int indexOf(Object o) - 查找位置' },
    { name: 'lastIndexOf', insertText: 'lastIndexOf(${1:o})', detail: 'int lastIndexOf(Object o) - 最后位置' },
    { name: 'toArray', insertText: 'toArray()', detail: 'Object[] toArray() - 转数组' },
    { name: 'subList', insertText: 'subList(${1:fromIndex}, ${2:toIndex})', detail: 'List<E> subList(int fromIndex, int toIndex) - 子列表' },
    { name: 'sort', insertText: 'sort(${1:c})', detail: 'void sort(Comparator<? super E> c) - 排序' },
    { name: 'forEach', insertText: 'forEach(${1:action})', detail: 'void forEach(Consumer<? super E> action) - 遍历' },
    { name: 'stream', insertText: 'stream()', detail: 'Stream<E> stream() - 转流' },
  ],
  'ArrayList': [
    { name: 'add', insertText: 'add(${1:e})', detail: 'boolean add(E e) - 添加元素' },
    { name: 'get', insertText: 'get(${1:index})', detail: 'E get(int index) - 获取元素' },
    { name: 'set', insertText: 'set(${1:index}, ${2:element})', detail: 'E set(int index, E element) - 设置元素' },
    { name: 'remove', insertText: 'remove(${1:index})', detail: 'E remove(int index) - 删除元素' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
    { name: 'contains', insertText: 'contains(${1:o})', detail: 'boolean contains(Object o) - 是否包含' },
    { name: 'indexOf', insertText: 'indexOf(${1:o})', detail: 'int indexOf(Object o) - 查找位置' },
    { name: 'toArray', insertText: 'toArray()', detail: 'Object[] toArray() - 转数组' },
    { name: 'ensureCapacity', insertText: 'ensureCapacity(${1:minCapacity})', detail: 'void ensureCapacity(int minCapacity) - 确保容量' },
    { name: 'trimToSize', insertText: 'trimToSize()', detail: 'void trimToSize() - 修剪容量' },
  ],
  'Map': [
    { name: 'put', insertText: 'put(${1:key}, ${2:value})', detail: 'V put(K key, V value) - 添加键值对' },
    { name: 'get', insertText: 'get(${1:key})', detail: 'V get(Object key) - 获取值' },
    { name: 'getOrDefault', insertText: 'getOrDefault(${1:key}, ${2:defaultValue})', detail: 'V getOrDefault(Object key, V defaultValue) - 获取值或默认值' },
    { name: 'remove', insertText: 'remove(${1:key})', detail: 'V remove(Object key) - 删除' },
    { name: 'containsKey', insertText: 'containsKey(${1:key})', detail: 'boolean containsKey(Object key) - 是否包含键' },
    { name: 'containsValue', insertText: 'containsValue(${1:value})', detail: 'boolean containsValue(Object value) - 是否包含值' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
    { name: 'keySet', insertText: 'keySet()', detail: 'Set<K> keySet() - 键集合' },
    { name: 'values', insertText: 'values()', detail: 'Collection<V> values() - 值集合' },
    { name: 'entrySet', insertText: 'entrySet()', detail: 'Set<Map.Entry<K,V>> entrySet() - 键值对集合' },
    { name: 'putIfAbsent', insertText: 'putIfAbsent(${1:key}, ${2:value})', detail: 'V putIfAbsent(K key, V value) - 不存在则添加' },
    { name: 'replace', insertText: 'replace(${1:key}, ${2:value})', detail: 'V replace(K key, V value) - 替换' },
    { name: 'forEach', insertText: 'forEach(${1:action})', detail: 'void forEach(BiConsumer<? super K, ? super V> action) - 遍历' },
  ],
  'HashMap': [
    { name: 'put', insertText: 'put(${1:key}, ${2:value})', detail: 'V put(K key, V value) - 添加键值对' },
    { name: 'get', insertText: 'get(${1:key})', detail: 'V get(Object key) - 获取值' },
    { name: 'getOrDefault', insertText: 'getOrDefault(${1:key}, ${2:defaultValue})', detail: 'V getOrDefault(Object key, V defaultValue) - 获取值或默认值' },
    { name: 'remove', insertText: 'remove(${1:key})', detail: 'V remove(Object key) - 删除' },
    { name: 'containsKey', insertText: 'containsKey(${1:key})', detail: 'boolean containsKey(Object key) - 是否包含键' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
    { name: 'keySet', insertText: 'keySet()', detail: 'Set<K> keySet() - 键集合' },
    { name: 'values', insertText: 'values()', detail: 'Collection<V> values() - 值集合' },
    { name: 'entrySet', insertText: 'entrySet()', detail: 'Set<Map.Entry<K,V>> entrySet() - 键值对集合' },
  ],
  'Set': [
    { name: 'add', insertText: 'add(${1:e})', detail: 'boolean add(E e) - 添加元素' },
    { name: 'remove', insertText: 'remove(${1:o})', detail: 'boolean remove(Object o) - 删除元素' },
    { name: 'contains', insertText: 'contains(${1:o})', detail: 'boolean contains(Object o) - 是否包含' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
    { name: 'addAll', insertText: 'addAll(${1:c})', detail: 'boolean addAll(Collection<? extends E> c) - 添加所有' },
    { name: 'retainAll', insertText: 'retainAll(${1:c})', detail: 'boolean retainAll(Collection<?> c) - 交集' },
    { name: 'toArray', insertText: 'toArray()', detail: 'Object[] toArray() - 转数组' },
    { name: 'stream', insertText: 'stream()', detail: 'Stream<E> stream() - 转流' },
  ],
  'HashSet': [
    { name: 'add', insertText: 'add(${1:e})', detail: 'boolean add(E e) - 添加元素' },
    { name: 'remove', insertText: 'remove(${1:o})', detail: 'boolean remove(Object o) - 删除元素' },
    { name: 'contains', insertText: 'contains(${1:o})', detail: 'boolean contains(Object o) - 是否包含' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
    { name: 'clone', insertText: 'clone()', detail: 'Object clone() - 克隆' },
  ],
  'StringBuilder': [
    { name: 'append', insertText: 'append(${1:str})', detail: 'StringBuilder append(String str) - 追加' },
    { name: 'insert', insertText: 'insert(${1:offset}, ${2:str})', detail: 'StringBuilder insert(int offset, String str) - 插入' },
    { name: 'delete', insertText: 'delete(${1:start}, ${2:end})', detail: 'StringBuilder delete(int start, int end) - 删除' },
    { name: 'deleteCharAt', insertText: 'deleteCharAt(${1:index})', detail: 'StringBuilder deleteCharAt(int index) - 删除字符' },
    { name: 'replace', insertText: 'replace(${1:start}, ${2:end}, ${3:str})', detail: 'StringBuilder replace(int start, int end, String str) - 替换' },
    { name: 'reverse', insertText: 'reverse()', detail: 'StringBuilder reverse() - 反转' },
    { name: 'toString', insertText: 'toString()', detail: 'String toString() - 转字符串' },
    { name: 'length', insertText: 'length()', detail: 'int length() - 长度' },
    { name: 'charAt', insertText: 'charAt(${1:index})', detail: 'char charAt(int index) - 获取字符' },
    { name: 'setCharAt', insertText: 'setCharAt(${1:index}, ${2:ch})', detail: 'void setCharAt(int index, char ch) - 设置字符' },
    { name: 'substring', insertText: 'substring(${1:start})', detail: 'String substring(int start) - 子字符串' },
    { name: 'indexOf', insertText: 'indexOf(${1:str})', detail: 'int indexOf(String str) - 查找位置' },
  ],
  'Character': [
    { name: 'isDigit', insertText: 'isDigit(${1:ch})', detail: 'static boolean isDigit(char ch) - 是否数字' },
    { name: 'isLetter', insertText: 'isLetter(${1:ch})', detail: 'static boolean isLetter(char ch) - 是否字母' },
    { name: 'isLetterOrDigit', insertText: 'isLetterOrDigit(${1:ch})', detail: 'static boolean isLetterOrDigit(char ch) - 是否字母或数字' },
    { name: 'isUpperCase', insertText: 'isUpperCase(${1:ch})', detail: 'static boolean isUpperCase(char ch) - 是否大写' },
    { name: 'isLowerCase', insertText: 'isLowerCase(${1:ch})', detail: 'static boolean isLowerCase(char ch) - 是否小写' },
    { name: 'isWhitespace', insertText: 'isWhitespace(${1:ch})', detail: 'static boolean isWhitespace(char ch) - 是否空白' },
    { name: 'toUpperCase', insertText: 'toUpperCase(${1:ch})', detail: 'static char toUpperCase(char ch) - 转大写' },
    { name: 'toLowerCase', insertText: 'toLowerCase(${1:ch})', detail: 'static char toLowerCase(char ch) - 转小写' },
    { name: 'getNumericValue', insertText: 'getNumericValue(${1:ch})', detail: 'static int getNumericValue(char ch) - 获取数值' },
    { name: 'valueOf', insertText: 'valueOf(${1:c})', detail: 'static Character valueOf(char c) - 转Character' },
  ],
  'Boolean': [
    { name: 'parseBoolean', insertText: 'parseBoolean(${1:s})', detail: 'static boolean parseBoolean(String s) - 解析布尔值' },
    { name: 'valueOf', insertText: 'valueOf(${1:b})', detail: 'static Boolean valueOf(boolean b) - 转Boolean' },
    { name: 'booleanValue', insertText: 'booleanValue()', detail: 'boolean booleanValue() - 获取boolean值' },
    { name: 'toString', insertText: 'toString()', detail: 'String toString() - 转字符串' },
    { name: 'logicalAnd', insertText: 'logicalAnd(${1:a}, ${2:b})', detail: 'static boolean logicalAnd(boolean a, boolean b) - 逻辑与' },
    { name: 'logicalOr', insertText: 'logicalOr(${1:a}, ${2:b})', detail: 'static boolean logicalOr(boolean a, boolean b) - 逻辑或' },
    { name: 'logicalXor', insertText: 'logicalXor(${1:a}, ${2:b})', detail: 'static boolean logicalXor(boolean a, boolean b) - 逻辑异或' },
  ],
  'Random': [
    { name: 'nextInt', insertText: 'nextInt()', detail: 'int nextInt() - 随机整数' },
    { name: 'nextInt(bound)', insertText: 'nextInt(${1:bound})', detail: 'int nextInt(int bound) - 随机整数[0,bound)' },
    { name: 'nextLong', insertText: 'nextLong()', detail: 'long nextLong() - 随机长整数' },
    { name: 'nextDouble', insertText: 'nextDouble()', detail: 'double nextDouble() - 随机双精度[0,1)' },
    { name: 'nextFloat', insertText: 'nextFloat()', detail: 'float nextFloat() - 随机浮点数[0,1)' },
    { name: 'nextBoolean', insertText: 'nextBoolean()', detail: 'boolean nextBoolean() - 随机布尔值' },
    { name: 'nextBytes', insertText: 'nextBytes(${1:bytes})', detail: 'void nextBytes(byte[] bytes) - 随机字节数组' },
    { name: 'nextGaussian', insertText: 'nextGaussian()', detail: 'double nextGaussian() - 高斯分布随机数' },
    { name: 'ints', insertText: 'ints()', detail: 'IntStream ints() - 随机整数流' },
    { name: 'setSeed', insertText: 'setSeed(${1:seed})', detail: 'void setSeed(long seed) - 设置种子' },
  ],
  'PriorityQueue': [
    { name: 'add', insertText: 'add(${1:e})', detail: 'boolean add(E e) - 添加元素' },
    { name: 'offer', insertText: 'offer(${1:e})', detail: 'boolean offer(E e) - 添加元素' },
    { name: 'poll', insertText: 'poll()', detail: 'E poll() - 取出并删除堆顶元素' },
    { name: 'peek', insertText: 'peek()', detail: 'E peek() - 查看堆顶元素' },
    { name: 'remove', insertText: 'remove(${1:o})', detail: 'boolean remove(Object o) - 删除元素' },
    { name: 'contains', insertText: 'contains(${1:o})', detail: 'boolean contains(Object o) - 是否包含' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
    { name: 'toArray', insertText: 'toArray()', detail: 'Object[] toArray() - 转数组' },
  ],
  'Queue': [
    { name: 'add', insertText: 'add(${1:e})', detail: 'boolean add(E e) - 添加元素' },
    { name: 'offer', insertText: 'offer(${1:e})', detail: 'boolean offer(E e) - 添加元素(推荐)' },
    { name: 'poll', insertText: 'poll()', detail: 'E poll() - 取出并删除队首' },
    { name: 'peek', insertText: 'peek()', detail: 'E peek() - 查看队首' },
    { name: 'remove', insertText: 'remove()', detail: 'E remove() - 取出并删除队首' },
    { name: 'element', insertText: 'element()', detail: 'E element() - 查看队首' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
  ],
  'Deque': [
    { name: 'addFirst', insertText: 'addFirst(${1:e})', detail: 'void addFirst(E e) - 添加到队首' },
    { name: 'addLast', insertText: 'addLast(${1:e})', detail: 'void addLast(E e) - 添加到队尾' },
    { name: 'offerFirst', insertText: 'offerFirst(${1:e})', detail: 'boolean offerFirst(E e) - 添加到队首' },
    { name: 'offerLast', insertText: 'offerLast(${1:e})', detail: 'boolean offerLast(E e) - 添加到队尾' },
    { name: 'pollFirst', insertText: 'pollFirst()', detail: 'E pollFirst() - 取出并删除队首' },
    { name: 'pollLast', insertText: 'pollLast()', detail: 'E pollLast() - 取出并删除队尾' },
    { name: 'peekFirst', insertText: 'peekFirst()', detail: 'E peekFirst() - 查看队首' },
    { name: 'peekLast', insertText: 'peekLast()', detail: 'E peekLast() - 查看队尾' },
    { name: 'push', insertText: 'push(${1:e})', detail: 'void push(E e) - 压栈(等同于addFirst)' },
    { name: 'pop', insertText: 'pop()', detail: 'E pop() - 弹栈(等同于removeFirst)' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
  ],
  'Stack': [
    { name: 'push', insertText: 'push(${1:item})', detail: 'E push(E item) - 压栈' },
    { name: 'pop', insertText: 'pop()', detail: 'E pop() - 弹栈' },
    { name: 'peek', insertText: 'peek()', detail: 'E peek() - 查看栈顶' },
    { name: 'empty', insertText: 'empty()', detail: 'boolean empty() - 是否为空' },
    { name: 'search', insertText: 'search(${1:o})', detail: 'int search(Object o) - 查找元素位置' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
  ],
  'LinkedList': [
    { name: 'add', insertText: 'add(${1:e})', detail: 'boolean add(E e) - 添加元素' },
    { name: 'addFirst', insertText: 'addFirst(${1:e})', detail: 'void addFirst(E e) - 添加到头部' },
    { name: 'addLast', insertText: 'addLast(${1:e})', detail: 'void addLast(E e) - 添加到尾部' },
    { name: 'get', insertText: 'get(${1:index})', detail: 'E get(int index) - 获取元素' },
    { name: 'getFirst', insertText: 'getFirst()', detail: 'E getFirst() - 获取第一个元素' },
    { name: 'getLast', insertText: 'getLast()', detail: 'E getLast() - 获取最后一个元素' },
    { name: 'remove', insertText: 'remove(${1:index})', detail: 'E remove(int index) - 删除元素' },
    { name: 'removeFirst', insertText: 'removeFirst()', detail: 'E removeFirst() - 删除第一个元素' },
    { name: 'removeLast', insertText: 'removeLast()', detail: 'E removeLast() - 删除最后一个元素' },
    { name: 'poll', insertText: 'poll()', detail: 'E poll() - 取出并删除第一个元素' },
    { name: 'peek', insertText: 'peek()', detail: 'E peek() - 查看第一个元素' },
    { name: 'push', insertText: 'push(${1:e})', detail: 'void push(E e) - 压栈' },
    { name: 'pop', insertText: 'pop()', detail: 'E pop() - 弹栈' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
  ],
  'TreeSet': [
    { name: 'add', insertText: 'add(${1:e})', detail: 'boolean add(E e) - 添加元素' },
    { name: 'remove', insertText: 'remove(${1:o})', detail: 'boolean remove(Object o) - 删除元素' },
    { name: 'contains', insertText: 'contains(${1:o})', detail: 'boolean contains(Object o) - 是否包含' },
    { name: 'first', insertText: 'first()', detail: 'E first() - 获取最小元素' },
    { name: 'last', insertText: 'last()', detail: 'E last() - 获取最大元素' },
    { name: 'pollFirst', insertText: 'pollFirst()', detail: 'E pollFirst() - 取出并删除最小元素' },
    { name: 'pollLast', insertText: 'pollLast()', detail: 'E pollLast() - 取出并删除最大元素' },
    { name: 'lower', insertText: 'lower(${1:e})', detail: 'E lower(E e) - 获取小于e的最大元素' },
    { name: 'floor', insertText: 'floor(${1:e})', detail: 'E floor(E e) - 获取小于等于e的最大元素' },
    { name: 'ceiling', insertText: 'ceiling(${1:e})', detail: 'E ceiling(E e) - 获取大于等于e的最小元素' },
    { name: 'higher', insertText: 'higher(${1:e})', detail: 'E higher(E e) - 获取大于e的最小元素' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
    { name: 'headSet', insertText: 'headSet(${1:toElement})', detail: 'SortedSet<E> headSet(E toElement) - 获取小于toElement的子集' },
    { name: 'tailSet', insertText: 'tailSet(${1:fromElement})', detail: 'SortedSet<E> tailSet(E fromElement) - 获取大于等于fromElement的子集' },
    { name: 'subSet', insertText: 'subSet(${1:fromElement}, ${2:toElement})', detail: 'SortedSet<E> subSet(E fromElement, E toElement) - 获取范围子集' },
  ],
  'TreeMap': [
    { name: 'put', insertText: 'put(${1:key}, ${2:value})', detail: 'V put(K key, V value) - 添加键值对' },
    { name: 'get', insertText: 'get(${1:key})', detail: 'V get(Object key) - 获取值' },
    { name: 'getOrDefault', insertText: 'getOrDefault(${1:key}, ${2:defaultValue})', detail: 'V getOrDefault(Object key, V defaultValue) - 获取值或默认值' },
    { name: 'remove', insertText: 'remove(${1:key})', detail: 'V remove(Object key) - 删除' },
    { name: 'containsKey', insertText: 'containsKey(${1:key})', detail: 'boolean containsKey(Object key) - 是否包含键' },
    { name: 'firstKey', insertText: 'firstKey()', detail: 'K firstKey() - 获取最小键' },
    { name: 'lastKey', insertText: 'lastKey()', detail: 'K lastKey() - 获取最大键' },
    { name: 'firstEntry', insertText: 'firstEntry()', detail: 'Map.Entry<K,V> firstEntry() - 获取最小键值对' },
    { name: 'lastEntry', insertText: 'lastEntry()', detail: 'Map.Entry<K,V> lastEntry() - 获取最大键值对' },
    { name: 'pollFirstEntry', insertText: 'pollFirstEntry()', detail: 'Map.Entry<K,V> pollFirstEntry() - 取出并删除最小键值对' },
    { name: 'pollLastEntry', insertText: 'pollLastEntry()', detail: 'Map.Entry<K,V> pollLastEntry() - 取出并删除最大键值对' },
    { name: 'lowerKey', insertText: 'lowerKey(${1:key})', detail: 'K lowerKey(K key) - 获取小于key的最大键' },
    { name: 'floorKey', insertText: 'floorKey(${1:key})', detail: 'K floorKey(K key) - 获取小于等于key的最大键' },
    { name: 'ceilingKey', insertText: 'ceilingKey(${1:key})', detail: 'K ceilingKey(K key) - 获取大于等于key的最小键' },
    { name: 'higherKey', insertText: 'higherKey(${1:key})', detail: 'K higherKey(K key) - 获取大于key的最小键' },
    { name: 'size', insertText: 'size()', detail: 'int size() - 大小' },
    { name: 'isEmpty', insertText: 'isEmpty()', detail: 'boolean isEmpty() - 是否为空' },
    { name: 'clear', insertText: 'clear()', detail: 'void clear() - 清空' },
    { name: 'keySet', insertText: 'keySet()', detail: 'Set<K> keySet() - 键集合(有序)' },
    { name: 'values', insertText: 'values()', detail: 'Collection<V> values() - 值集合' },
    { name: 'entrySet', insertText: 'entrySet()', detail: 'Set<Map.Entry<K,V>> entrySet() - 键值对集合' },
    { name: 'headMap', insertText: 'headMap(${1:toKey})', detail: 'SortedMap<K,V> headMap(K toKey) - 获取小于toKey的子映射' },
    { name: 'tailMap', insertText: 'tailMap(${1:fromKey})', detail: 'SortedMap<K,V> tailMap(K fromKey) - 获取大于等于fromKey的子映射' },
    { name: 'subMap', insertText: 'subMap(${1:fromKey}, ${2:toKey})', detail: 'SortedMap<K,V> subMap(K fromKey, K toKey) - 获取范围子映射' },
  ],
  'BigInteger': [
    { name: 'valueOf', insertText: 'valueOf(${1:val})', detail: 'static BigInteger valueOf(long val) - 创建BigInteger' },
    { name: 'add', insertText: 'add(${1:val})', detail: 'BigInteger add(BigInteger val) - 加法' },
    { name: 'subtract', insertText: 'subtract(${1:val})', detail: 'BigInteger subtract(BigInteger val) - 减法' },
    { name: 'multiply', insertText: 'multiply(${1:val})', detail: 'BigInteger multiply(BigInteger val) - 乘法' },
    { name: 'divide', insertText: 'divide(${1:val})', detail: 'BigInteger divide(BigInteger val) - 除法' },
    { name: 'remainder', insertText: 'remainder(${1:val})', detail: 'BigInteger remainder(BigInteger val) - 取余' },
    { name: 'mod', insertText: 'mod(${1:m})', detail: 'BigInteger mod(BigInteger m) - 取模' },
    { name: 'pow', insertText: 'pow(${1:exponent})', detail: 'BigInteger pow(int exponent) - 幂运算' },
    { name: 'gcd', insertText: 'gcd(${1:val})', detail: 'BigInteger gcd(BigInteger val) - 最大公约数' },
    { name: 'abs', insertText: 'abs()', detail: 'BigInteger abs() - 绝对值' },
    { name: 'negate', insertText: 'negate()', detail: 'BigInteger negate() - 取反' },
    { name: 'compareTo', insertText: 'compareTo(${1:val})', detail: 'int compareTo(BigInteger val) - 比较' },
    { name: 'max', insertText: 'max(${1:val})', detail: 'BigInteger max(BigInteger val) - 最大值' },
    { name: 'min', insertText: 'min(${1:val})', detail: 'BigInteger min(BigInteger val) - 最小值' },
    { name: 'toString', insertText: 'toString()', detail: 'String toString() - 转字符串' },
    { name: 'intValue', insertText: 'intValue()', detail: 'int intValue() - 转int' },
    { name: 'longValue', insertText: 'longValue()', detail: 'long longValue() - 转long' },
    { name: 'isProbablePrime', insertText: 'isProbablePrime(${1:certainty})', detail: 'boolean isProbablePrime(int certainty) - 是否素数' },
    { name: 'nextProbablePrime', insertText: 'nextProbablePrime()', detail: 'BigInteger nextProbablePrime() - 下一个素数' },
    { name: 'modPow', insertText: 'modPow(${1:exponent}, ${2:m})', detail: 'BigInteger modPow(BigInteger exponent, BigInteger m) - 模幂' },
    { name: 'modInverse', insertText: 'modInverse(${1:m})', detail: 'BigInteger modInverse(BigInteger m) - 模逆' },
  ],
  'BigDecimal': [
    { name: 'valueOf', insertText: 'valueOf(${1:val})', detail: 'static BigDecimal valueOf(double val) - 创建BigDecimal' },
    { name: 'add', insertText: 'add(${1:augend})', detail: 'BigDecimal add(BigDecimal augend) - 加法' },
    { name: 'subtract', insertText: 'subtract(${1:subtrahend})', detail: 'BigDecimal subtract(BigDecimal subtrahend) - 减法' },
    { name: 'multiply', insertText: 'multiply(${1:multiplicand})', detail: 'BigDecimal multiply(BigDecimal multiplicand) - 乘法' },
    { name: 'divide', insertText: 'divide(${1:divisor})', detail: 'BigDecimal divide(BigDecimal divisor) - 除法' },
    { name: 'divide(scale)', insertText: 'divide(${1:divisor}, ${2:scale}, ${3:roundingMode})', detail: 'BigDecimal divide(BigDecimal divisor, int scale, int roundingMode) - 除法(指定精度)' },
    { name: 'remainder', insertText: 'remainder(${1:divisor})', detail: 'BigDecimal remainder(BigDecimal divisor) - 取余' },
    { name: 'pow', insertText: 'pow(${1:n})', detail: 'BigDecimal pow(int n) - 幂运算' },
    { name: 'abs', insertText: 'abs()', detail: 'BigDecimal abs() - 绝对值' },
    { name: 'negate', insertText: 'negate()', detail: 'BigDecimal negate() - 取反' },
    { name: 'compareTo', insertText: 'compareTo(${1:val})', detail: 'int compareTo(BigDecimal val) - 比较' },
    { name: 'max', insertText: 'max(${1:val})', detail: 'BigDecimal max(BigDecimal val) - 最大值' },
    { name: 'min', insertText: 'min(${1:val})', detail: 'BigDecimal min(BigDecimal val) - 最小值' },
    { name: 'setScale', insertText: 'setScale(${1:newScale}, ${2:roundingMode})', detail: 'BigDecimal setScale(int newScale, int roundingMode) - 设置精度' },
    { name: 'doubleValue', insertText: 'doubleValue()', detail: 'double doubleValue() - 转double' },
    { name: 'toString', insertText: 'toString()', detail: 'String toString() - 转字符串' },
    { name: 'toPlainString', insertText: 'toPlainString()', detail: 'String toPlainString() - 转字符串(无科学计数法)' },
  ],
  'StringTokenizer': [
    { name: 'hasMoreTokens', insertText: 'hasMoreTokens()', detail: 'boolean hasMoreTokens() - 是否有更多token' },
    { name: 'nextToken', insertText: 'nextToken()', detail: 'String nextToken() - 获取下一个token' },
    { name: 'hasMoreElements', insertText: 'hasMoreElements()', detail: 'boolean hasMoreElements() - 是否有更多元素' },
    { name: 'nextElement', insertText: 'nextElement()', detail: 'Object nextElement() - 获取下一个元素' },
    { name: 'countTokens', insertText: 'countTokens()', detail: 'int countTokens() - 计算剩余token数' },
  ],
  'BufferedReader': [
    { name: 'readLine', insertText: 'readLine()', detail: 'String readLine() - 读取一行' },
    { name: 'read', insertText: 'read()', detail: 'int read() - 读取一个字符' },
    { name: 'read(char[])', insertText: 'read(${1:cbuf}, ${2:off}, ${3:len})', detail: 'int read(char[] cbuf, int off, int len) - 读取字符到数组' },
    { name: 'skip', insertText: 'skip(${1:n})', detail: 'long skip(long n) - 跳过n个字符' },
    { name: 'ready', insertText: 'ready()', detail: 'boolean ready() - 是否可读' },
    { name: 'close', insertText: 'close()', detail: 'void close() - 关闭' },
  ],
  'BufferedWriter': [
    { name: 'write', insertText: 'write(${1:s})', detail: 'void write(String s) - 写入字符串' },
    { name: 'newLine', insertText: 'newLine()', detail: 'void newLine() - 写入换行符' },
    { name: 'flush', insertText: 'flush()', detail: 'void flush() - 刷新缓冲区' },
    { name: 'close', insertText: 'close()', detail: 'void close() - 关闭' },
    { name: 'append', insertText: 'append(${1:c})', detail: 'Writer append(char c) - 追加字符' },
  ],
  'PrintWriter': [
    { name: 'println', insertText: 'println(${1:x})', detail: 'void println(Object x) - 打印并换行' },
    { name: 'print', insertText: 'print(${1:x})', detail: 'void print(Object x) - 打印' },
    { name: 'printf', insertText: 'printf(${1:format}, ${2:args})', detail: 'PrintWriter printf(String format, Object... args) - 格式化打印' },
    { name: 'format', insertText: 'format(${1:format}, ${2:args})', detail: 'PrintWriter format(String format, Object... args) - 格式化' },
    { name: 'flush', insertText: 'flush()', detail: 'void flush() - 刷新' },
    { name: 'close', insertText: 'close()', detail: 'void close() - 关闭' },
  ],
  'StringJoiner': [
    { name: 'add', insertText: 'add(${1:newValue})', detail: 'StringJoiner add(CharSequence newValue) - 添加元素' },
    { name: 'toString', insertText: 'toString()', detail: 'String toString() - 转字符串' },
    { name: 'length', insertText: 'length()', detail: 'int length() - 长度' },
    { name: 'setEmptyValue', insertText: 'setEmptyValue(${1:emptyValue})', detail: 'StringJoiner setEmptyValue(CharSequence emptyValue) - 设置空值' },
    { name: 'merge', insertText: 'merge(${1:other})', detail: 'StringJoiner merge(StringJoiner other) - 合并' },
  ],
  'Comparator': [
    { name: 'compare', insertText: 'compare(${1:o1}, ${2:o2})', detail: 'int compare(T o1, T o2) - 比较' },
    { name: 'reversed', insertText: 'reversed()', detail: 'Comparator<T> reversed() - 反转比较器' },
    { name: 'thenComparing', insertText: 'thenComparing(${1:other})', detail: 'Comparator<T> thenComparing(Comparator<? super T> other) - 链式比较' },
    { name: 'comparing', insertText: 'comparing(${1:keyExtractor})', detail: 'static <T,U> Comparator<T> comparing(Function<? super T,? extends U> keyExtractor) - 提取键比较' },
    { name: 'comparingInt', insertText: 'comparingInt(${1:keyExtractor})', detail: 'static <T> Comparator<T> comparingInt(ToIntFunction<? super T> keyExtractor) - int键比较' },
    { name: 'naturalOrder', insertText: 'naturalOrder()', detail: 'static <T> Comparator<T> naturalOrder() - 自然顺序' },
    { name: 'reverseOrder', insertText: 'reverseOrder()', detail: 'static <T> Comparator<T> reverseOrder() - 反向顺序' },
    { name: 'nullsFirst', insertText: 'nullsFirst(${1:comparator})', detail: 'static <T> Comparator<T> nullsFirst(Comparator<? super T> comparator) - null排前' },
    { name: 'nullsLast', insertText: 'nullsLast(${1:comparator})', detail: 'static <T> Comparator<T> nullsLast(Comparator<? super T> comparator) - null排后' },
  ],
  'Map.Entry': [
    { name: 'getKey', insertText: 'getKey()', detail: 'K getKey() - 获取键' },
    { name: 'getValue', insertText: 'getValue()', detail: 'V getValue() - 获取值' },
    { name: 'setValue', insertText: 'setValue(${1:value})', detail: 'V setValue(V value) - 设置值' },
    { name: 'comparingByKey', insertText: 'comparingByKey()', detail: 'static <K,V> Comparator<Map.Entry<K,V>> comparingByKey() - 按键比较' },
    { name: 'comparingByValue', insertText: 'comparingByValue()', detail: 'static <K,V> Comparator<Map.Entry<K,V>> comparingByValue() - 按值比较' },
  ],
  'Arrays': [
    { name: 'sort', insertText: 'sort(${1:a})', detail: 'static void sort(int[] a) - 排序' },
    { name: 'sort(range)', insertText: 'sort(${1:a}, ${2:fromIndex}, ${3:toIndex})', detail: 'static void sort(int[] a, int fromIndex, int toIndex) - 范围排序' },
    { name: 'parallelSort', insertText: 'parallelSort(${1:a})', detail: 'static void parallelSort(int[] a) - 并行排序' },
    { name: 'binarySearch', insertText: 'binarySearch(${1:a}, ${2:key})', detail: 'static int binarySearch(int[] a, int key) - 二分查找' },
    { name: 'fill', insertText: 'fill(${1:a}, ${2:val})', detail: 'static void fill(int[] a, int val) - 填充' },
    { name: 'fill(range)', insertText: 'fill(${1:a}, ${2:fromIndex}, ${3:toIndex}, ${4:val})', detail: 'static void fill(int[] a, int fromIndex, int toIndex, int val) - 范围填充' },
    { name: 'copyOf', insertText: 'copyOf(${1:original}, ${2:newLength})', detail: 'static int[] copyOf(int[] original, int newLength) - 复制' },
    { name: 'copyOfRange', insertText: 'copyOfRange(${1:original}, ${2:from}, ${3:to})', detail: 'static int[] copyOfRange(int[] original, int from, int to) - 范围复制' },
    { name: 'equals', insertText: 'equals(${1:a}, ${2:a2})', detail: 'static boolean equals(int[] a, int[] a2) - 比较' },
    { name: 'toString', insertText: 'toString(${1:a})', detail: 'static String toString(int[] a) - 转字符串' },
    { name: 'deepToString', insertText: 'deepToString(${1:a})', detail: 'static String deepToString(Object[] a) - 深度转字符串' },
    { name: 'deepEquals', insertText: 'deepEquals(${1:a1}, ${2:a2})', detail: 'static boolean deepEquals(Object[] a1, Object[] a2) - 深度比较' },
    { name: 'asList', insertText: 'asList(${1:a})', detail: 'static <T> List<T> asList(T... a) - 转List' },
    { name: 'stream', insertText: 'stream(${1:array})', detail: 'static IntStream stream(int[] array) - 转流' },
    { name: 'hashCode', insertText: 'hashCode(${1:a})', detail: 'static int hashCode(int[] a) - 哈希值' },
    { name: 'mismatch', insertText: 'mismatch(${1:a}, ${2:b})', detail: 'static int mismatch(int[] a, int[] b) - 找出第一个不同位置' },
    { name: 'compare', insertText: 'compare(${1:a}, ${2:b})', detail: 'static int compare(int[] a, int[] b) - 比较数组' },
    { name: 'compareUnsigned', insertText: 'compareUnsigned(${1:a}, ${2:b})', detail: 'static int compareUnsigned(int[] a, int[] b) - 无符号比较' },
    { name: 'spliterator', insertText: 'spliterator(${1:array})', detail: 'static Spliterator.OfInt spliterator(int[] array) - 分割迭代器' },
  ],
}

export const setupJavaCompletion = (monaco) => {
  const javaCommonClasses = Object.keys(classMethods)
  
  const javaAnnotations = [
    'Override', 'Deprecated', 'SuppressWarnings', 'FunctionalInterface',
    'SafeVarargs', 'Native', 'Target', 'Retention', 'Documented', 'Inherited',
    'Repeatable'
  ]

  const createCompletionItem = (label, kind, insertText, detail, documentation, sortText) => {
    return {
      label,
      kind,
      insertText,
      detail,
      documentation,
      sortText,
      insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
    }
  }

  const keywordCompletions = javaKeywords.map(keyword => 
    createCompletionItem(
      keyword,
      monaco.languages.CompletionItemKind.Keyword,
      keyword,
      'Java关键字',
      `Java关键字: ${keyword}`,
      `1${keyword}`
    )
  )

  const uniqueTypes = [...new Set([...javaTypes, ...javaCommonClasses])]
  
  const typeCompletions = uniqueTypes.map(type =>
    createCompletionItem(
      type,
      monaco.languages.CompletionItemKind.Class,
      type,
      'Java类',
      `Java类: ${type}`,
      `2${type}`
    )
  )

  const annotationCompletions = javaAnnotations.map(anno =>
    createCompletionItem(
      `@${anno}`,
      monaco.languages.CompletionItemKind.Function,
      `@${anno}`,
      'Java注解',
      `Java注解: @${anno}`,
      `3${anno}`
    )
  )

  const methodCompletions = [
    createCompletionItem(
      'System.out.println',
      monaco.languages.CompletionItemKind.Method,
      'System.out.println(${1:args})',
      'System.out.println()',
      '打印输出到标准输出流',
      '4println'
    ),
    createCompletionItem(
      'System.out.print',
      monaco.languages.CompletionItemKind.Method,
      'System.out.print(${1:args})',
      'System.out.print()',
      '打印输出到标准输出流（不换行）',
      '4print'
    ),
  ]

  const constructorCompletions = javaCommonClasses.map(cls =>
    createCompletionItem(
      cls,
      monaco.languages.CompletionItemKind.Constructor,
      `${cls}(\${1:})`,
      `构造函数: ${cls}`,
      `创建 ${cls} 对象`,
      `5${cls}`
    )
  )

  const modifierCompletions = [
    createCompletionItem(
      'public static void main',
      monaco.languages.CompletionItemKind.Snippet,
      'public static void main(String[] args) {\n\t${1:}\n}',
      'main方法',
      'Java程序入口方法',
      '0main'
    ),
    createCompletionItem(
      'public',
      monaco.languages.CompletionItemKind.Keyword,
      'public',
      'public',
      '公共访问修饰符',
      '1public'
    ),
    createCompletionItem(
      'private',
      monaco.languages.CompletionItemKind.Keyword,
      'private',
      'private',
      '私有访问修饰符',
      '1private'
    ),
    createCompletionItem(
      'protected',
      monaco.languages.CompletionItemKind.Keyword,
      'protected',
      'protected',
      '受保护访问修饰符',
      '1protected'
    ),
    createCompletionItem(
      'static',
      monaco.languages.CompletionItemKind.Keyword,
      'static',
      'static',
      '静态修饰符',
      '1static'
    ),
    createCompletionItem(
      'final',
      monaco.languages.CompletionItemKind.Keyword,
      'final',
      'final',
      '最终修饰符',
      '1final'
    ),
  ]

  const allCompletions = [
    ...modifierCompletions,
    ...keywordCompletions,
    ...typeCompletions,
    ...annotationCompletions,
    ...methodCompletions
  ]

  const needsImportClasses = {
    'Scanner': 'java.util.Scanner',
    'ArrayList': 'java.util.ArrayList',
    'LinkedList': 'java.util.LinkedList',
    'HashMap': 'java.util.HashMap',
    'TreeMap': 'java.util.TreeMap',
    'HashSet': 'java.util.HashSet',
    'TreeSet': 'java.util.TreeSet',
    'PriorityQueue': 'java.util.PriorityQueue',
    'Queue': 'java.util.Queue',
    'Deque': 'java.util.Deque',
    'Stack': 'java.util.Stack',
    'Arrays': 'java.util.Arrays',
    'Collections': 'java.util.Collections',
    'List': 'java.util.List',
    'Map': 'java.util.Map',
    'Set': 'java.util.Set',
    'BigInteger': 'java.math.BigInteger',
    'BigDecimal': 'java.math.BigDecimal',
    'BufferedReader': 'java.io.BufferedReader',
    'BufferedWriter': 'java.io.BufferedWriter',
    'FileReader': 'java.io.FileReader',
    'FileWriter': 'java.io.FileWriter',
    'File': 'java.io.File',
    'Path': 'java.nio.file.Path',
    'Paths': 'java.nio.file.Paths',
    'InputStream': 'java.io.InputStream',
    'OutputStream': 'java.io.OutputStream',
    'StringTokenizer': 'java.util.StringTokenizer',
    'Random': 'java.util.Random',
    'Comparator': 'java.util.Comparator',
  }

  const addImportIfNeeded = (model, className) => {
    const importPath = needsImportClasses[className]
    if (!importPath) return null
    
    const content = model.getValue()
    const importStatement = `import ${importPath};`
    
    if (content.includes(importStatement)) return null
    
    const existingImports = content.match(/^import\s+[\w.]+;\s*$/gm) || []
    const packageMatch = content.match(/^package\s+[\w.]+;\s*$/m)
    
    let insertLine = 1
    if (packageMatch) {
      const packageEndLine = content.substring(0, packageMatch.index + packageMatch[0].length).split('\n').length
      insertLine = packageEndLine + 1
    }
    
    if (existingImports.length > 0) {
      const lastImport = existingImports[existingImports.length - 1]
      const lastImportIndex = content.lastIndexOf(lastImport)
      insertLine = content.substring(0, lastImportIndex + lastImport.length).split('\n').length + 1
    }
    
    return { line: insertLine, import: importStatement }
  }

  monaco.languages.registerCompletionItemProvider('java', {
    triggerCharacters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._@'.split(''),
    provideCompletionItems: (model, position) => {
      const lineContent = model.getLineContent(position.lineNumber)
      const textBeforeCursor = lineContent.substring(0, position.column - 1)

      const newMatch = textBeforeCursor.match(/new\s+(\w*)$/)
      if (newMatch) {
        const prefix = newMatch[1]
        const filteredConstructors = constructorCompletions.filter(c => 
          !prefix || c.label.toLowerCase().startsWith(prefix.toLowerCase())
        ).map(c => {
          const importInfo = addImportIfNeeded(model, c.label)
          return {
            ...c,
            additionalTextEdits: importInfo ? [{
              range: {
                startLineNumber: importInfo.line,
                startColumn: 1,
                endLineNumber: importInfo.line,
                endColumn: 1
              },
              text: importInfo.import + '\n'
            }] : undefined,
            range: {
              startLineNumber: position.lineNumber,
              startColumn: position.column - prefix.length,
              endLineNumber: position.lineNumber,
              endColumn: position.column
            }
          }
        })
        return { suggestions: filteredConstructors }
      }

      const dotMatch = textBeforeCursor.match(/(\w+)\.\s*(\w*)$/)
      if (dotMatch) {
        const identifier = dotMatch[1]
        const methodPrefix = dotMatch[2]
        
        let methods = classMethods[identifier]
        
        if (!methods) {
          const fullContent = model.getValue()
          const variableType = extractVariableType(fullContent, identifier)
          if (variableType) {
            methods = classMethods[variableType]
          }
        }
        
        if (methods) {
          const methodCompletions = methods
            .filter(m => !methodPrefix || m.name.toLowerCase().startsWith(methodPrefix.toLowerCase()))
            .map(m => ({
              label: m.name,
              kind: monaco.languages.CompletionItemKind.Method,
              insertText: m.insertText,
              detail: m.detail,
              documentation: m.detail,
              sortText: `0${m.name}`,
              insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet,
              range: {
                startLineNumber: position.lineNumber,
                startColumn: position.column - methodPrefix.length,
                endLineNumber: position.lineNumber,
                endColumn: position.column
              }
            }))
          
          return { suggestions: methodCompletions }
        }
      }

      const wordMatch = textBeforeCursor.match(/(\w+)$/)
      const currentWord = wordMatch ? wordMatch[1] : ''

      const fullContent = model.getValue()
      const variableCompletions = extractVariables(fullContent, monaco)
      const userMethodCompletions = extractMethods(fullContent, monaco)

      const combinedCompletions = [...allCompletions, ...variableCompletions, ...userMethodCompletions]

      const filteredCompletions = combinedCompletions.filter(item => {
        if (!currentWord) return true
        return item.label.toLowerCase().startsWith(currentWord.toLowerCase())
      })

      return {
        suggestions: filteredCompletions.map(item => {
          const importInfo = addImportIfNeeded(model, item.label)
          return {
            ...item,
            additionalTextEdits: importInfo ? [{
              range: {
                startLineNumber: importInfo.line,
                startColumn: 1,
                endLineNumber: importInfo.line,
                endColumn: 1
              },
              text: importInfo.import + '\n'
            }] : undefined,
            range: {
              startLineNumber: position.lineNumber,
              startColumn: position.column - currentWord.length,
              endLineNumber: position.lineNumber,
              endColumn: position.column
            }
          }
        })
      }
    }
  })
}

const extractVariableType = (code, varName) => {
  const allTypes = [
    'int', 'long', 'short', 'byte', 'float', 'double', 'boolean', 'char',
    'String', 'Integer', 'Long', 'Double', 'Float', 'Boolean', 'Character',
    'Object', 'Class', 'List', 'ArrayList', 'LinkedList', 'Map', 'HashMap', 'TreeMap',
    'Set', 'HashSet', 'TreeSet', 'Scanner', 'StringBuilder', 'StringBuffer',
    'Thread', 'Runnable', 'File', 'Path', 'InputStream', 'OutputStream',
    'Reader', 'Writer', 'Exception', 'BigInteger', 'BigDecimal',
    'Queue', 'Deque', 'Stack', 'PriorityQueue', 'Random', 'Arrays', 'Collections',
    'Comparator', 'StringTokenizer', 'BufferedReader', 'BufferedWriter', 'PrintWriter'
  ]
  
  for (const type of allTypes) {
    const patterns = [
      new RegExp(`\\b${type}\\s+${varName}\\s*=`),
      new RegExp(`\\b${type}\\s+${varName}\\s*;`),
      new RegExp(`\\b${type}<[^>]+>\\s+${varName}\\s*=`),
      new RegExp(`\\b${type}<[^>]+>\\s+${varName}\\s*;`),
    ]
    
    for (const pattern of patterns) {
      if (pattern.test(code)) {
        return type
      }
    }
  }
  
  return null
}

const extractVariables = (code, monaco) => {
  const variables = []
  const seenVars = new Set()

  const typePattern = /\b(?:int|long|short|byte|float|double|boolean|char|String|Integer|Long|Double|Float|Boolean|Character|Object|Class|List|ArrayList|LinkedList|Map|HashMap|TreeMap|Set|HashSet|TreeSet|Scanner|StringBuilder|StringBuffer|Thread|Runnable|File|Path|InputStream|OutputStream|Reader|Writer|Exception|BigInteger|BigDecimal|Queue|Deque|Stack|PriorityQueue|Random|var)\s+(\w+)\s*[=;]/
  
  let match
  const typeRegex = new RegExp(typePattern.source, 'g')
  while ((match = typeRegex.exec(code)) !== null) {
    const varName = match[1]
    if (!seenVars.has(varName) && !javaKeywords.includes(varName)) {
      seenVars.add(varName)
      variables.push({
        label: varName,
        kind: monaco.languages.CompletionItemKind.Variable,
        insertText: varName,
        detail: '局部变量',
        documentation: `变量: ${varName}`,
        sortText: `0${varName}`
      })
    }
  }

  return variables
}

const extractMethods = (code, monaco) => {
  const methods = []
  const seenMethods = new Set()

  const methodPattern = /(?:public|private|protected)?\s*(?:static\s+)?(?:final\s+)?(?:abstract\s+)?(?:synchronized\s+)?(?:\w+(?:<[^>]+>)?)\s+(\w+)\s*\(([^)]*)\)\s*(?:throws\s+[\w\s,]+)?\s*\{/
  
  let match
  const methodRegex = new RegExp(methodPattern.source, 'g')
  while ((match = methodRegex.exec(code)) !== null) {
    const methodName = match[1]
    const params = match[2]
    
    if (!seenMethods.has(methodName) && 
        !javaKeywords.includes(methodName) &&
        methodName !== 'main' &&
        !['int', 'long', 'short', 'byte', 'float', 'double', 'boolean', 'char', 'String', 'void', 'Integer', 'Long', 'Double', 'Float', 'Boolean', 'Character', 'Object', 'Class', 'List', 'ArrayList', 'Map', 'HashMap', 'Set', 'HashSet'].includes(methodName)) {
      seenMethods.add(methodName)
      
      let insertText = methodName + '()'
      let detail = '方法'
      
      if (params && params.trim()) {
        const paramList = params.split(',').map(p => p.trim().split(/\s+/).pop()).filter(p => p)
        insertText = methodName + '(' + paramList.map((p, i) => '${' + (i + 1) + ':}').join(', ') + ')'
        detail = `方法 (${params.trim()})`
      }
      
      methods.push({
        label: methodName,
        kind: monaco.languages.CompletionItemKind.Method,
        insertText: insertText,
        detail: detail,
        documentation: `自定义方法: ${methodName}`,
        sortText: `0${methodName}`,
        insertTextRules: monaco.languages.CompletionItemInsertTextRule.InsertAsSnippet
      })
    }
  }

  return methods
}
