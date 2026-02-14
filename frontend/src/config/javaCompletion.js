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

  const typeCompletions = javaTypes.map(type =>
    createCompletionItem(
      type,
      monaco.languages.CompletionItemKind.Class,
      type,
      'Java类',
      `Java类: ${type}`,
      `2${type}`
    )
  )

  const classCompletions = javaCommonClasses.map(cls =>
    createCompletionItem(
      cls,
      monaco.languages.CompletionItemKind.Class,
      cls,
      'Java类',
      `Java类: ${cls}`,
      `2${cls}`
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
    ...classCompletions,
    ...annotationCompletions,
    ...methodCompletions
  ]

  monaco.languages.registerCompletionItemProvider('java', {
    triggerCharacters: 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ._@'.split(''),
    provideCompletionItems: (model, position) => {
      const lineContent = model.getLineContent(position.lineNumber)
      const textBeforeCursor = lineContent.substring(0, position.column - 1)

      const dotMatch = textBeforeCursor.match(/(\w+)\.\s*(\w*)$/)
      if (dotMatch) {
        const className = dotMatch[1]
        const methodPrefix = dotMatch[2]
        
        const methods = classMethods[className]
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
        suggestions: filteredCompletions.map(item => ({
          ...item,
          range: {
            startLineNumber: position.lineNumber,
            startColumn: position.column - currentWord.length,
            endLineNumber: position.lineNumber,
            endColumn: position.column
          }
        }))
      }
    }
  })
}

const extractVariables = (code, monaco) => {
  const variables = []
  const seenVars = new Set()

  const typePattern = /\b(?:int|long|short|byte|float|double|boolean|char|String|Integer|Long|Double|Float|Boolean|Character|Object|Class|List|ArrayList|Map|HashMap|Set|HashSet|Scanner|StringBuilder|Thread|Runnable|File|Path|InputStream|OutputStream|Reader|Writer|Exception|Runnable|var)\s+(\w+)\s*[=;]/
  
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
