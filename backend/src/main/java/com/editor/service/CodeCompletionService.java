package com.editor.service;

import com.editor.dto.CompletionItem;
import org.springframework.stereotype.Service;

import javax.annotation.PostConstruct;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Service
public class CodeCompletionService {
    
    private final Map<String, List<CompletionItem>> classMembers = new HashMap<>();
    
    @PostConstruct
    public void init() {
        initWrapperClasses();
        initStringClasses();
        initMathClasses();
        initCollectionClasses();
        initUtilityClasses();
        initIOClasses();
    }
    
    private void initWrapperClasses() {
        addClass("Integer", "class", "java.lang.Integer", new String[]{
            "parseInt(String s)", "valueOf(int i)", "valueOf(String s)", "toString()", "toString(int i)",
            "intValue()", "longValue()", "doubleValue()", "floatValue()", "byteValue()", "shortValue()",
            "compareTo(Integer anotherInteger)", "compare(int x, int y)", "max(int a, int b)", "min(int a, int b)",
            "sum(int a, int b)", "toBinaryString(int i)", "toHexString(int i)", "toOctalString(int i)",
            "decode(String nm)", "getInteger(String nm)", "getInteger(String nm, int val)"
        }, new String[]{
            "int", "Integer", "Integer", "String", "String",
            "int", "long", "double", "float", "byte", "short",
            "int", "int", "int", "int",
            "int", "String", "String", "String",
            "Integer", "Integer", "Integer"
        });
        
        addClass("Long", "class", "java.lang.Long", new String[]{
            "parseLong(String s)", "valueOf(long l)", "valueOf(String s)", "toString()", "toString(long l)",
            "longValue()", "intValue()", "doubleValue()", "floatValue()",
            "compareTo(Long anotherLong)", "compare(long x, long y)", "max(long a, long b)", "min(long a, long b)",
            "sum(long a, long b)", "toBinaryString(long i)", "toHexString(long i)", "toOctalString(long i)"
        }, new String[]{
            "long", "Long", "Long", "String", "String",
            "long", "int", "double", "float",
            "int", "int", "long", "long",
            "long", "String", "String", "String"
        });
        
        addClass("Double", "class", "java.lang.Double", new String[]{
            "parseDouble(String s)", "valueOf(double d)", "valueOf(String s)", "toString()", "toString(double d)",
            "doubleValue()", "intValue()", "longValue()", "floatValue()",
            "compareTo(Double anotherDouble)", "compare(double d1, double d2)",
            "isNaN(double v)", "isInfinite(double v)", "sum(double a, double b)", "max(double a, double b)", "min(double a, double b)"
        }, new String[]{
            "double", "Double", "Double", "String", "String",
            "double", "int", "long", "float",
            "int", "int",
            "boolean", "boolean", "double", "double", "double"
        });
        
        addClass("Float", "class", "java.lang.Float", new String[]{
            "parseFloat(String s)", "valueOf(float f)", "valueOf(String s)", "toString()", "toString(float f)",
            "floatValue()", "doubleValue()", "intValue()", "longValue()",
            "compareTo(Float anotherFloat)", "compare(float f1, float f2)",
            "isNaN(float v)", "isInfinite(float v)"
        }, new String[]{
            "float", "Float", "Float", "String", "String",
            "float", "double", "int", "long",
            "int", "int",
            "boolean", "boolean"
        });
        
        addClass("Boolean", "class", "java.lang.Boolean", new String[]{
            "parseBoolean(String s)", "valueOf(boolean b)", "valueOf(String s)", "toString()", "toString(boolean b)",
            "booleanValue()", "compareTo(Boolean b)", "logicalAnd(boolean a, boolean b)",
            "logicalOr(boolean a, boolean b)", "logicalXor(boolean a, boolean b)"
        }, new String[]{
            "boolean", "Boolean", "Boolean", "String", "String",
            "boolean", "int", "boolean",
            "boolean", "boolean"
        });
        
        addClass("Character", "class", "java.lang.Character", new String[]{
            "charValue()", "compareTo(Character anotherCharacter)", "toString()", "toString(char c)",
            "isDigit(char ch)", "isLetter(char ch)", "isLetterOrDigit(char ch)", "isUpperCase(char ch)",
            "isLowerCase(char ch)", "isWhitespace(char ch)", "toUpperCase(char ch)", "toLowerCase(char ch)",
            "getNumericValue(char ch)", "digit(char ch, int radix)", "forDigit(int digit, int radix)"
        }, new String[]{
            "char", "int", "String", "String",
            "boolean", "boolean", "boolean", "boolean",
            "boolean", "boolean", "char", "char",
            "int", "int", "char"
        });
        
        addClass("Byte", "class", "java.lang.Byte", new String[]{
            "parseByte(String s)", "valueOf(byte b)", "valueOf(String s)", "toString()", "toString(byte b)",
            "byteValue()", "shortValue()", "intValue()", "longValue()", "floatValue()", "doubleValue()",
            "compareTo(Byte anotherByte)", "compare(byte x, byte y)"
        }, new String[]{
            "byte", "Byte", "Byte", "String", "String",
            "byte", "short", "int", "long", "float", "double",
            "int", "int"
        });
        
        addClass("Short", "class", "java.lang.Short", new String[]{
            "parseShort(String s)", "valueOf(short s)", "valueOf(String s)", "toString()", "toString(short s)",
            "shortValue()", "byteValue()", "intValue()", "longValue()", "floatValue()", "doubleValue()",
            "compareTo(Short anotherShort)", "compare(short x, short y)"
        }, new String[]{
            "short", "Short", "Short", "String", "String",
            "short", "byte", "int", "long", "float", "double",
            "int", "int"
        });
    }
    
    private void initStringClasses() {
        addClass("String", "class", "java.lang.String", new String[]{
            "length()", "charAt(int index)", "substring(int beginIndex)", "substring(int beginIndex, int endIndex)",
            "indexOf(String str)", "indexOf(String str, int fromIndex)", "lastIndexOf(String str)",
            "contains(CharSequence s)", "startsWith(String prefix)", "endsWith(String suffix)",
            "isEmpty()", "isBlank()", "trim()", "strip()", "stripLeading()", "stripTrailing()",
            "toLowerCase()", "toUpperCase()", "toLowerCase(Locale locale)", "toUpperCase(Locale locale)",
            "replace(char oldChar, char newChar)", "replace(CharSequence target, CharSequence replacement)",
            "replaceAll(String regex, String replacement)", "replaceFirst(String regex, String replacement)",
            "split(String regex)", "split(String regex, int limit)",
            "equals(Object anObject)", "equalsIgnoreCase(String anotherString)", "compareTo(String anotherString)",
            "compareToIgnoreCase(String str)", "matches(String regex)",
            "concat(String str)", "join(CharSequence delimiter, CharSequence... elements)",
            "format(String format, Object... args)", "valueOf(Object obj)", "valueOf(int i)", "valueOf(long l)",
            "valueOf(double d)", "valueOf(float f)", "valueOf(boolean b)", "valueOf(char c)", "valueOf(char[] data)",
            "toCharArray()", "getBytes()", "getBytes(String charsetName)", "intern()",
            "repeat(int count)", "lines()", "indent(int n)", "stripIndent()", "translateEscapes()"
        }, new String[]{
            "int", "char", "String", "String",
            "int", "int", "int",
            "boolean", "boolean", "boolean",
            "boolean", "boolean", "String", "String", "String", "String",
            "String", "String", "String", "String",
            "String", "String",
            "String", "String",
            "String[]", "String[]",
            "boolean", "boolean", "int",
            "int", "boolean",
            "String", "String",
            "String", "String", "String", "String", "String",
            "String", "String", "String", "String", "String", "String", "String", "String",
            "char[]", "byte[]", "byte[]", "String",
            "String", "Stream<String>", "String", "String", "String"
        });
        
        addClass("StringBuilder", "class", "java.lang.StringBuilder", new String[]{
            "append(String str)", "append(int i)", "append(long l)", "append(double d)", "append(float f)",
            "append(boolean b)", "append(char c)", "append(char[] str)", "append(Object obj)",
            "insert(int offset, String str)", "insert(int offset, int i)", "insert(int offset, long l)",
            "delete(int start, int end)", "deleteCharAt(int index)",
            "replace(int start, int end, String str)", "reverse()",
            "charAt(int index)", "setCharAt(int index, char ch)", "length()", "capacity()", "setLength(int newLength)",
            "substring(int start)", "substring(int start, int end)", "toString()", "trimToSize()",
            "indexOf(String str)", "indexOf(String str, int fromIndex)", "lastIndexOf(String str)"
        }, new String[]{
            "StringBuilder", "StringBuilder", "StringBuilder", "StringBuilder", "StringBuilder",
            "StringBuilder", "StringBuilder", "StringBuilder", "StringBuilder",
            "StringBuilder", "StringBuilder", "StringBuilder",
            "StringBuilder", "StringBuilder",
            "StringBuilder", "StringBuilder",
            "char", "void", "int", "int", "void",
            "String", "String", "String", "void",
            "int", "int", "int"
        });
        
        addClass("StringBuffer", "class", "java.lang.StringBuffer", new String[]{
            "append(String str)", "append(int i)", "append(long l)", "append(double d)",
            "insert(int offset, String str)", "delete(int start, int end)", "deleteCharAt(int index)",
            "replace(int start, int end, String str)", "reverse()",
            "charAt(int index)", "setCharAt(int index, char ch)", "length()", "capacity()",
            "substring(int start)", "substring(int start, int end)", "toString()",
            "indexOf(String str)", "lastIndexOf(String str)"
        }, new String[]{
            "StringBuffer", "StringBuffer", "StringBuffer", "StringBuffer",
            "StringBuffer", "StringBuffer", "StringBuffer",
            "StringBuffer", "StringBuffer",
            "char", "void", "int", "int",
            "String", "String", "String",
            "int", "int"
        });
    }
    
    private void initMathClasses() {
        addClass("Math", "class", "java.lang.Math", new String[]{
            "abs(int a)", "abs(long a)", "abs(double a)", "abs(float a)",
            "max(int a, int b)", "max(long a, long b)", "max(double a, double b)", "max(float a, float b)",
            "min(int a, int b)", "min(long a, long b)", "min(double a, double b)", "min(float a, float b)",
            "pow(double a, double b)", "sqrt(double a)", "cbrt(double a)",
            "exp(double a)", "log(double a)", "log10(double a)", "log1p(double x)",
            "sin(double a)", "cos(double a)", "tan(double a)",
            "asin(double a)", "acos(double a)", "atan(double a)", "atan2(double y, double x)",
            "toRadians(double angdeg)", "toDegrees(double angrad)",
            "floor(double a)", "ceil(double a)", "round(float a)", "round(double a)",
            "random()", "rint(double a)", "floorDiv(int x, int y)", "floorMod(int x, int y)",
            "addExact(int x, int y)", "subtractExact(int x, int y)", "multiplyExact(int x, int y)",
            "incrementExact(int a)", "decrementExact(int a)", "negateExact(int a)"
        }, new String[]{
            "int", "long", "double", "float",
            "int", "long", "double", "float",
            "int", "long", "double", "float",
            "double", "double", "double",
            "double", "double", "double", "double",
            "double", "double", "double",
            "double", "double", "double", "double",
            "double", "double",
            "double", "double", "int", "long",
            "double", "double", "int", "int",
            "int", "int", "int",
            "int", "int", "int"
        });
        
        addClass("Random", "class", "java.util.Random", new String[]{
            "nextInt()", "nextInt(int bound)", "nextLong()", "nextDouble()", "nextFloat()",
            "nextBoolean()", "nextBytes(byte[] bytes)", "nextGaussian()",
            "ints()", "ints(int streamSize)", "ints(int randomNumberOrigin, int randomNumberBound)",
            "doubles()", "doubles(int streamSize)", "setSeed(long seed)"
        }, new String[]{
            "int", "int", "long", "double", "float",
            "boolean", "void", "double",
            "IntStream", "IntStream", "IntStream",
            "DoubleStream", "DoubleStream", "void"
        });
    }
    
    private void initCollectionClasses() {
        addClass("List", "interface", "java.util.List", new String[]{
            "add(E e)", "add(int index, E element)", "addAll(Collection<? extends E> c)",
            "remove(int index)", "remove(Object o)", "removeAll(Collection<?> c)",
            "get(int index)", "set(int index, E element)", "indexOf(Object o)", "lastIndexOf(Object o)",
            "contains(Object o)", "containsAll(Collection<?> c)", "isEmpty()", "size()",
            "clear()", "toArray()", "toArray(T[] a)", "iterator()", "listIterator()",
            "subList(int fromIndex, int toIndex)", "sort(Comparator<? super E> c)",
            "replaceAll(UnaryOperator<E> operator)"
        }, new String[]{
            "boolean", "void", "boolean",
            "E", "boolean", "boolean",
            "E", "E", "int", "int",
            "boolean", "boolean", "boolean", "int",
            "void", "Object[]", "T[]", "Iterator<E>", "ListIterator<E>",
            "List<E>", "void",
            "void"
        });
        
        addClass("ArrayList", "class", "java.util.ArrayList", new String[]{
            "add(E e)", "add(int index, E element)", "addAll(Collection<? extends E> c)",
            "remove(int index)", "remove(Object o)", "removeAll(Collection<?> c)", "removeIf(Predicate<? super E> filter)",
            "get(int index)", "set(int index, E element)", "indexOf(Object o)", "lastIndexOf(Object o)",
            "contains(Object o)", "isEmpty()", "size()", "clear()",
            "toArray()", "toArray(T[] a)", "clone()",
            "ensureCapacity(int minCapacity)", "trimToSize()",
            "forEach(Consumer<? super E> action)", "sort(Comparator<? super E> c)"
        }, new String[]{
            "boolean", "void", "boolean",
            "E", "boolean", "boolean", "boolean",
            "E", "E", "int", "int",
            "boolean", "boolean", "int", "void",
            "Object[]", "T[]", "Object",
            "void", "void",
            "void", "void"
        });
        
        addClass("LinkedList", "class", "java.util.LinkedList", new String[]{
            "add(E e)", "add(int index, E element)", "addFirst(E e)", "addLast(E e)",
            "remove(int index)", "remove(Object o)", "removeFirst()", "removeLast()",
            "get(int index)", "getFirst()", "getLast()", "set(int index, E element)",
            "indexOf(Object o)", "lastIndexOf(Object o)", "contains(Object o)",
            "size()", "isEmpty()", "clear()", "toArray()",
            "peek()", "poll()", "pollFirst()", "pollLast()",
            "push(E e)", "pop()"
        }, new String[]{
            "boolean", "void", "void", "void",
            "E", "boolean", "E", "E",
            "E", "E", "E", "E",
            "int", "int", "boolean",
            "int", "boolean", "void", "Object[]",
            "E", "E", "E", "E",
            "void", "E"
        });
        
        addClass("Set", "interface", "java.util.Set", new String[]{
            "add(E e)", "addAll(Collection<? extends E> c)",
            "remove(Object o)", "removeAll(Collection<?> c)", "retainAll(Collection<?> c)",
            "contains(Object o)", "containsAll(Collection<?> c)", "isEmpty()", "size()",
            "clear()", "toArray()", "iterator()",
            "spliterator()", "stream()", "parallelStream()"
        }, new String[]{
            "boolean", "boolean",
            "boolean", "boolean", "boolean",
            "boolean", "boolean", "boolean", "int",
            "void", "Object[]", "Iterator<E>",
            "Spliterator<E>", "Stream<E>", "Stream<E>"
        });
        
        addClass("HashSet", "class", "java.util.HashSet", new String[]{
            "add(E e)", "remove(Object o)", "contains(Object o)",
            "isEmpty()", "size()", "clear()", "clone()",
            "toArray()", "iterator()", "spliterator()"
        }, new String[]{
            "boolean", "boolean", "boolean",
            "boolean", "int", "void", "Object",
            "Object[]", "Iterator<E>", "Spliterator<E>"
        });
        
        addClass("TreeSet", "class", "java.util.TreeSet", new String[]{
            "add(E e)", "remove(Object o)", "contains(Object o)",
            "first()", "last()", "pollFirst()", "pollLast()",
            "lower(E e)", "floor(E e)", "ceiling(E e)", "higher(E e)",
            "isEmpty()", "size()", "clear()", "clone()",
            "headSet(E toElement)", "tailSet(E fromElement)", "subSet(E fromElement, E toElement)"
        }, new String[]{
            "boolean", "boolean", "boolean",
            "E", "E", "E", "E",
            "E", "E", "E", "E",
            "boolean", "int", "void", "Object",
            "SortedSet<E>", "SortedSet<E>", "SortedSet<E>"
        });
        
        addClass("Map", "interface", "java.util.Map", new String[]{
            "put(K key, V value)", "putAll(Map<? extends K, ? extends V> m)", "putIfAbsent(K key, V value)",
            "get(Object key)", "getOrDefault(Object key, V defaultValue)",
            "remove(Object key)", "remove(Object key, Object value)",
            "replace(K key, V value)", "replace(K key, V oldValue, V newValue)",
            "containsKey(Object key)", "containsValue(Object value)", "isEmpty()", "size()",
            "clear()", "keySet()", "values()", "entrySet()",
            "forEach(BiConsumer<? super K, ? super V> action)",
            "compute(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)",
            "computeIfAbsent(K key, Function<? super K, ? extends V> mappingFunction)",
            "computeIfPresent(K key, BiFunction<? super K, ? super V, ? extends V> remappingFunction)",
            "merge(K key, V value, BiFunction<? super V, ? super V, ? extends V> remappingFunction)"
        }, new String[]{
            "V", "void", "V",
            "V", "V",
            "V", "boolean",
            "V", "boolean",
            "boolean", "boolean", "boolean", "int",
            "void", "Set<K>", "Collection<V>", "Set<Map.Entry<K,V>>",
            "void",
            "V",
            "V",
            "V",
            "V"
        });
        
        addClass("HashMap", "class", "java.util.HashMap", new String[]{
            "put(K key, V value)", "get(Object key)", "getOrDefault(Object key, V defaultValue)",
            "remove(Object key)", "containsKey(Object key)", "containsValue(Object value)",
            "isEmpty()", "size()", "clear()", "clone()",
            "keySet()", "values()", "entrySet()",
            "putIfAbsent(K key, V value)", "replace(K key, V value)"
        }, new String[]{
            "V", "V", "V",
            "V", "boolean", "boolean",
            "boolean", "int", "void", "Object",
            "Set<K>", "Collection<V>", "Set<Map.Entry<K,V>>",
            "V", "V"
        });
        
        addClass("TreeMap", "class", "java.util.TreeMap", new String[]{
            "put(K key, V value)", "get(Object key)", "remove(Object key)",
            "containsKey(Object key)", "containsValue(Object value)", "isEmpty()", "size()",
            "firstKey()", "lastKey()", "firstEntry()", "lastEntry()",
            "lowerKey(K key)", "floorKey(K key)", "ceilingKey(K key)", "higherKey(K key)",
            "pollFirstEntry()", "pollLastEntry()",
            "headMap(K toKey)", "tailMap(K fromKey)", "subMap(K fromKey, K toKey)",
            "keySet()", "values()", "entrySet()"
        }, new String[]{
            "V", "V", "V",
            "boolean", "boolean", "boolean", "int",
            "K", "K", "Map.Entry<K,V>", "Map.Entry<K,V>",
            "K", "K", "K", "K",
            "Map.Entry<K,V>", "Map.Entry<K,V>",
            "SortedMap<K,V>", "SortedMap<K,V>", "SortedMap<K,V>",
            "Set<K>", "Collection<V>", "Set<Map.Entry<K,V>>"
        });
        
        addClass("Queue", "interface", "java.util.Queue", new String[]{
            "add(E e)", "offer(E e)", "remove()", "poll()", "element()", "peek()",
            "isEmpty()", "size()", "clear()", "contains(Object o)",
            "iterator()", "toArray()"
        }, new String[]{
            "boolean", "boolean", "E", "E", "E", "E",
            "boolean", "int", "void", "boolean",
            "Iterator<E>", "Object[]"
        });
        
        addClass("Deque", "interface", "java.util.Deque", new String[]{
            "addFirst(E e)", "addLast(E e)", "offerFirst(E e)", "offerLast(E e)",
            "removeFirst()", "removeLast()", "pollFirst()", "pollLast()",
            "getFirst()", "getLast()", "peekFirst()", "peekLast()",
            "removeFirstOccurrence(Object o)", "removeLastOccurrence(Object o)",
            "add(E e)", "offer(E e)", "remove()", "poll()", "peek()",
            "push(E e)", "pop()",
            "size()", "isEmpty()", "contains(Object o)", "clear()"
        }, new String[]{
            "void", "void", "boolean", "boolean",
            "E", "E", "E", "E",
            "E", "E", "E", "E",
            "boolean", "boolean",
            "boolean", "boolean", "E", "E", "E",
            "void", "E",
            "int", "boolean", "boolean", "void"
        });
        
        addClass("Stack", "class", "java.util.Stack", new String[]{
            "push(E item)", "pop()", "peek()", "empty()", "search(Object o)",
            "add(E e)", "remove(int index)", "get(int index)", "size()", "isEmpty()"
        }, new String[]{
            "E", "E", "E", "boolean", "int",
            "boolean", "E", "E", "int", "boolean"
        });
    }
    
    private void initUtilityClasses() {
        addClass("Arrays", "class", "java.util.Arrays", new String[]{
            "sort(int[] a)", "sort(int[] a, int fromIndex, int toIndex)", "sort(Object[] a)",
            "binarySearch(int[] a, int key)", "binarySearch(Object[] a, Object key)",
            "equals(int[] a, int[] a2)", "equals(Object[] a, Object[] a2)",
            "fill(int[] a, int val)", "fill(int[] a, int fromIndex, int toIndex, int val)",
            "copyOf(int[] original, int newLength)", "copyOfRange(int[] original, int from, int to)",
            "toString(int[] a)", "toString(Object[] a)", "deepToString(Object[] a)",
            "asList(T... a)", "hashCode(int[] a)", "deepHashCode(Object[] a)",
            "compare(int[] a, int[] b)", "compareUnsigned(int[] a, int[] b)",
            "mismatch(int[] a, int[] b)", "parallelSort(int[] a)", "parallelPrefix(int[] array, IntBinaryOperator op)",
            "setAll(int[] array, IntUnaryOperator generator)", "stream(int[] array)", "spliterator(int[] array)"
        }, new String[]{
            "void", "void", "void",
            "int", "int",
            "boolean", "boolean",
            "void", "void",
            "int[]", "int[]",
            "String", "String", "String",
            "List<T>", "int", "int",
            "int", "int",
            "int", "void", "void",
            "void", "IntStream", "Spliterator.OfInt"
        });
        
        addClass("Collections", "class", "java.util.Collections", new String[]{
            "sort(List<T> list)", "sort(List<T> list, Comparator<? super T> c)",
            "binarySearch(List<? extends Comparable<? super T>> list, T key)",
            "reverse(List<?> list)", "shuffle(List<?> list)", "shuffle(List<?> list, Random rnd)",
            "swap(List<?> list, int i, int j)", "rotate(List<?> list, int distance)",
            "fill(List<? super T> list, T obj)", "copy(List<? super T> dest, List<? extends T> src)",
            "replaceAll(List<T> list, T oldVal, T newVal)",
            "indexOfSubList(List<?> source, List<?> target)", "lastIndexOfSubList(List<?> source, List<?> target)",
            "max(Collection<? extends T> coll)", "min(Collection<? extends T> coll)",
            "frequency(Collection<?> c, Object o)", "disjoint(Collection<?> c1, Collection<?> c2)",
            "addAll(Collection<? super T> c, T... elements)",
            "emptyList()", "emptySet()", "emptyMap()",
            "singleton(T o)", "singletonList(T o)", "singletonMap(K key, V value)",
            "unmodifiableList(List<? extends T> list)", "unmodifiableSet(Set<? extends T> s)", "unmodifiableMap(Map<? extends K, ? extends V> m)",
            "synchronizedList(List<T> list)", "synchronizedSet(Set<T> s)", "synchronizedMap(Map<K,V> m)"
        }, new String[]{
            "void", "void",
            "int",
            "void", "void", "void",
            "void", "void",
            "void", "void",
            "boolean",
            "int", "int",
            "T", "T",
            "int", "boolean",
            "boolean",
            "List<T>", "Set<T>", "Map<K,V>",
            "Set<T>", "List<T>", "Map<K,V>",
            "List<T>", "Set<T>", "Map<K,V>",
            "List<T>", "Set<T>", "Map<K,V>"
        });
        
        addClass("Comparator", "interface", "java.util.Comparator", new String[]{
            "compare(T o1, T o2)", "equals(Object obj)", "reversed()",
            "thenComparing(Comparator<? super T> other)",
            "thenComparing(Function<? super T, ? extends U> keyExtractor)",
            "comparing(Function<? super T, ? extends U> keyExtractor)",
            "comparingInt(ToIntFunction<? super T> keyExtractor)",
            "comparingLong(ToLongFunction<? super T> keyExtractor)",
            "comparingDouble(ToDoubleFunction<? super T> keyExtractor)",
            "naturalOrder()", "reverseOrder()", "nullsFirst(Comparator<? super T> comparator)", "nullsLast(Comparator<? super T> comparator)"
        }, new String[]{
            "int", "boolean", "Comparator<T>",
            "Comparator<T>",
            "Comparator<T>",
            "Comparator<T>",
            "Comparator<T>",
            "Comparator<T>",
            "Comparator<T>",
            "Comparator<T>", "Comparator<T>", "Comparator<T>", "Comparator<T>"
        });
        
        addClass("Comparable", "interface", "java.lang.Comparable", new String[]{
            "compareTo(T o)"
        }, new String[]{
            "int"
        });
    }
    
    private void initIOClasses() {
        addClass("Scanner", "class", "java.util.Scanner", new String[]{
            "next()", "nextLine()", "nextInt()", "nextLong()", "nextDouble()", "nextFloat()",
            "nextBoolean()", "nextByte()", "nextShort()", "nextBigInteger()", "nextBigDecimal()",
            "hasNext()", "hasNextLine()", "hasNextInt()", "hasNextLong()", "hasNextDouble()",
            "useDelimiter(String pattern)", "useLocale(Locale locale)", "useRadix(int radix)",
            "close()", "ioException()", "delimiter()", "locale()", "radix()"
        }, new String[]{
            "String", "String", "int", "long", "double", "float",
            "boolean", "byte", "short", "BigInteger", "BigDecimal",
            "boolean", "boolean", "boolean", "boolean", "boolean",
            "Scanner", "Scanner", "Scanner",
            "void", "IOException", "Pattern", "Locale", "int"
        });
        
        addClass("System", "class", "java.lang.System", new String[]{
            "out.println()", "out.println(String x)", "out.print(String x)", "out.printf(String format, Object... args)",
            "err.println()", "err.println(String x)", "err.print(String x)",
            "in.read()", "in.read(byte[] b)",
            "currentTimeMillis()", "nanoTime()",
            "exit(int status)", "gc()", "runFinalization()",
            "arraycopy(Object src, int srcPos, Object dest, int destPos, int length)",
            "getenv()", "getenv(String name)", "getProperties()", "getProperty(String key)", "getProperty(String key, String def)",
            "setProperty(String key, String value)", "clearProperty(String key)",
            "identityHashCode(Object x)", "lineSeparator()"
        }, new String[]{
            "void", "void", "void", "PrintStream",
            "void", "void", "void",
            "int", "int",
            "long", "long",
            "void", "void", "void",
            "void",
            "Map<String,String>", "String", "Properties", "String", "String",
            "String", "String",
            "int", "String"
        });
    }
    
    private void addClass(String className, String kind, String fullName, String[] members, String[] returnTypes) {
        List<CompletionItem> items = new ArrayList<>();
        for (int i = 0; i < members.length; i++) {
            String member = members[i];
            String returnType = i < returnTypes.length ? returnTypes[i] : "void";
            
            String insertText = member;
            String detail = returnType + " " + member;
            
            if (member.contains("(")) {
                int parenIndex = member.indexOf("(");
                String methodName = member.substring(0, parenIndex);
                String params = member.substring(parenIndex);
                insertText = methodName + params;
                detail = returnType + " " + member;
            }
            
            items.add(new CompletionItem(member, returnType, kind.equals("interface") ? "method" : "method", detail, insertText));
        }
        classMembers.put(className, items);
    }
    
    public List<CompletionItem> getCompletions(String className, String prefix) {
        List<CompletionItem> result = new ArrayList<>();
        
        if (className != null && !className.isEmpty()) {
            List<CompletionItem> classItems = classMembers.get(className);
            if (classItems != null) {
                for (CompletionItem item : classItems) {
                    if (prefix == null || prefix.isEmpty() || item.getName().toLowerCase().startsWith(prefix.toLowerCase())) {
                        result.add(item);
                    }
                }
            }
        } else {
            for (Map.Entry<String, List<CompletionItem>> entry : classMembers.entrySet()) {
                if (prefix == null || prefix.isEmpty() || entry.getKey().toLowerCase().startsWith(prefix.toLowerCase())) {
                    result.add(new CompletionItem(entry.getKey(), "class", "class", entry.getKey(), entry.getKey()));
                }
            }
        }
        
        return result;
    }
    
    public List<CompletionItem> getAllClasses() {
        List<CompletionItem> result = new ArrayList<>();
        for (String className : classMembers.keySet()) {
            result.add(new CompletionItem(className, "class", "class", className, className));
        }
        return result;
    }
}
