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
    
    private final Map<String, List<CompletionItem>> javaClassMembers = new HashMap<>();
    private final Map<String, List<CompletionItem>> cppFunctions = new HashMap<>();
    private final List<CompletionItem> cppKeywords = new ArrayList<>();
    private final List<CompletionItem> cppSTL = new ArrayList<>();
    
    @PostConstruct
    public void init() {
        initJavaClasses();
        initCppCompletions();
    }
    
    private void initJavaClasses() {
        addJavaClass("Integer", new String[]{
            "parseInt(String s)", "valueOf(int i)", "valueOf(String s)", "toString()",
            "intValue()", "longValue()", "doubleValue()", "floatValue()",
            "compareTo(Integer anotherInteger)", "max(int a, int b)", "min(int a, int b)"
        }, new String[]{"int", "Integer", "Integer", "String", "int", "long", "double", "float", "int", "int", "int"});
        
        addJavaClass("Long", new String[]{
            "parseLong(String s)", "valueOf(long l)", "toString()", "longValue()", "intValue()"
        }, new String[]{"long", "Long", "String", "long", "int"});
        
        addJavaClass("Double", new String[]{
            "parseDouble(String s)", "valueOf(double d)", "toString()", "doubleValue()"
        }, new String[]{"double", "Double", "String", "double"});
        
        addJavaClass("String", new String[]{
            "length()", "charAt(int index)", "substring(int beginIndex)", "substring(int beginIndex, int endIndex)",
            "indexOf(String str)", "lastIndexOf(String str)", "contains(CharSequence s)",
            "startsWith(String prefix)", "endsWith(String suffix)", "trim()", "strip()",
            "isEmpty()", "isBlank()", "toLowerCase()", "toUpperCase()",
            "replace(char oldChar, char newChar)", "replaceAll(String regex, String replacement)",
            "split(String regex)", "equals(Object obj)", "equalsIgnoreCase(String str)",
            "compareTo(String str)", "toCharArray()", "getBytes()", "valueOf(Object obj)"
        }, new String[]{"int", "char", "String", "String", "int", "int", "boolean", "boolean", "boolean", "String", "String", "boolean", "boolean", "String", "String", "String", "String", "String[]", "boolean", "boolean", "int", "char[]", "byte[]", "String"});
        
        addJavaClass("Math", new String[]{
            "abs(int a)", "abs(long a)", "abs(double a)", "abs(float a)",
            "max(int a, int b)", "max(long a, long b)", "max(double a, double b)",
            "min(int a, int b)", "min(long a, long b)", "min(double a, double b)",
            "pow(double a, double b)", "sqrt(double a)", "cbrt(double a)",
            "floor(double a)", "ceil(double a)", "round(double a)",
            "random()", "sin(double a)", "cos(double a)", "tan(double a)",
            "log(double a)", "log10(double a)", "exp(double a)"
        }, new String[]{"int", "long", "double", "float", "int", "long", "double", "int", "long", "double", "double", "double", "double", "double", "double", "long", "double", "double", "double", "double", "double", "double", "double"});
        
        addJavaClass("Scanner", new String[]{
            "next()", "nextLine()", "nextInt()", "nextLong()", "nextDouble()",
            "nextFloat()", "nextBoolean()", "hasNext()", "hasNextInt()", "hasNextLine()", "close()"
        }, new String[]{"String", "String", "int", "long", "double", "float", "boolean", "boolean", "boolean", "boolean", "void"});
        
        addJavaClass("Arrays", new String[]{
            "sort(int[] a)", "sort(int[] a, int fromIndex, int toIndex)", "parallelSort(int[] a)",
            "binarySearch(int[] a, int key)", "fill(int[] a, int val)", "fill(int[] a, int fromIndex, int toIndex, int val)",
            "copyOf(int[] original, int newLength)", "copyOfRange(int[] original, int from, int to)",
            "equals(int[] a, int[] a2)", "toString(int[] a)", "deepToString(Object[] a)", "asList(T... a)"
        }, new String[]{"void", "void", "void", "int", "void", "void", "int[]", "int[]", "boolean", "String", "String", "List<T>"});
        
        addJavaClass("Collections", new String[]{
            "sort(List<T> list)", "sort(List<T> list, Comparator<? super T> c)", "reverse(List<?> list)",
            "shuffle(List<?> list)", "binarySearch(List<? extends T> list, T key)",
            "max(Collection<? extends T> coll)", "min(Collection<? extends T> coll)",
            "fill(List<? super T> list, T obj)", "copy(List<? super T> dest, List<? extends T> src)",
            "swap(List<?> list, int i, int j)", "frequency(Collection<?> c, Object o)", "addAll(Collection<? super T> c, T... elements)"
        }, new String[]{"void", "void", "void", "void", "int", "T", "T", "void", "void", "void", "int", "boolean"});
        
        addJavaClass("List", new String[]{
            "add(E e)", "add(int index, E element)", "get(int index)", "set(int index, E element)",
            "remove(int index)", "remove(Object o)", "size()", "isEmpty()", "clear()",
            "contains(Object o)", "indexOf(Object o)", "lastIndexOf(Object o)", "toArray()", "subList(int fromIndex, int toIndex)"
        }, new String[]{"boolean", "void", "E", "E", "E", "boolean", "int", "boolean", "void", "boolean", "int", "int", "Object[]", "List<E>"});
        
        addJavaClass("ArrayList", new String[]{
            "add(E e)", "get(int index)", "set(int index, E element)", "remove(int index)",
            "size()", "isEmpty()", "clear()", "contains(Object o)", "indexOf(Object o)", "toArray()"
        }, new String[]{"boolean", "E", "E", "E", "int", "boolean", "void", "boolean", "int", "Object[]"});
        
        addJavaClass("LinkedList", new String[]{
            "add(E e)", "addFirst(E e)", "addLast(E e)", "get(int index)", "getFirst()", "getLast()",
            "remove(int index)", "removeFirst()", "removeLast()", "poll()", "peek()", "push(E e)", "pop()", "size()"
        }, new String[]{"boolean", "void", "void", "E", "E", "E", "E", "E", "E", "E", "E", "void", "E", "int"});
        
        addJavaClass("Map", new String[]{
            "put(K key, V value)", "get(Object key)", "getOrDefault(Object key, V defaultValue)",
            "remove(Object key)", "containsKey(Object key)", "containsValue(Object value)",
            "size()", "isEmpty()", "clear()", "keySet()", "values()", "entrySet()", "putIfAbsent(K key, V value)"
        }, new String[]{"V", "V", "V", "V", "boolean", "boolean", "int", "boolean", "void", "Set<K>", "Collection<V>", "Set<Map.Entry<K,V>>", "V"});
        
        addJavaClass("HashMap", new String[]{
            "put(K key, V value)", "get(Object key)", "getOrDefault(Object key, V defaultValue)",
            "remove(Object key)", "containsKey(Object key)", "size()", "isEmpty()", "clear()", "keySet()", "values()", "entrySet()"
        }, new String[]{"V", "V", "V", "V", "boolean", "int", "boolean", "void", "Set<K>", "Collection<V>", "Set<Map.Entry<K,V>>"});
        
        addJavaClass("TreeMap", new String[]{
            "put(K key, V value)", "get(Object key)", "remove(Object key)", "containsKey(Object key)",
            "firstKey()", "lastKey()", "firstEntry()", "lastEntry()", "pollFirstEntry()", "pollLastEntry()",
            "lowerKey(K key)", "floorKey(K key)", "ceilingKey(K key)", "higherKey(K key)", "size()"
        }, new String[]{"V", "V", "V", "boolean", "K", "K", "Map.Entry<K,V>", "Map.Entry<K,V>", "Map.Entry<K,V>", "Map.Entry<K,V>", "K", "K", "K", "K", "int"});
        
        addJavaClass("Set", new String[]{
            "add(E e)", "remove(Object o)", "contains(Object o)", "size()", "isEmpty()", "clear()", "addAll(Collection<? extends E> c)"
        }, new String[]{"boolean", "boolean", "boolean", "int", "boolean", "void", "boolean"});
        
        addJavaClass("HashSet", new String[]{
            "add(E e)", "remove(Object o)", "contains(Object o)", "size()", "isEmpty()", "clear()"
        }, new String[]{"boolean", "boolean", "boolean", "int", "boolean", "void"});
        
        addJavaClass("TreeSet", new String[]{
            "add(E e)", "remove(Object o)", "contains(Object o)", "first()", "last()",
            "pollFirst()", "pollLast()", "lower(E e)", "floor(E e)", "ceiling(E e)", "higher(E e)", "size()"
        }, new String[]{"boolean", "boolean", "boolean", "E", "E", "E", "E", "E", "E", "E", "E", "int"});
        
        addJavaClass("PriorityQueue", new String[]{
            "add(E e)", "offer(E e)", "poll()", "peek()", "remove(Object o)", "contains(Object o)", "size()", "isEmpty()", "clear()"
        }, new String[]{"boolean", "boolean", "E", "E", "boolean", "boolean", "int", "boolean", "void"});
        
        addJavaClass("Queue", new String[]{
            "add(E e)", "offer(E e)", "poll()", "peek()", "remove()", "element()", "size()", "isEmpty()"
        }, new String[]{"boolean", "boolean", "E", "E", "E", "E", "int", "boolean"});
        
        addJavaClass("Deque", new String[]{
            "addFirst(E e)", "addLast(E e)", "offerFirst(E e)", "offerLast(E e)",
            "pollFirst()", "pollLast()", "peekFirst()", "peekLast()", "push(E e)", "pop()", "size()"
        }, new String[]{"void", "void", "boolean", "boolean", "E", "E", "E", "E", "void", "E", "int"});
        
        addJavaClass("Stack", new String[]{
            "push(E item)", "pop()", "peek()", "empty()", "search(Object o)", "size()"
        }, new String[]{"E", "E", "E", "boolean", "int", "int"});
        
        addJavaClass("StringBuilder", new String[]{
            "append(String str)", "append(int i)", "append(double d)", "append(char c)",
            "insert(int offset, String str)", "delete(int start, int end)", "deleteCharAt(int index)",
            "replace(int start, int end, String str)", "reverse()", "toString()", "length()", "charAt(int index)"
        }, new String[]{"StringBuilder", "StringBuilder", "StringBuilder", "StringBuilder", "StringBuilder", "StringBuilder", "StringBuilder", "StringBuilder", "StringBuilder", "String", "int", "char"});
        
        addJavaClass("Character", new String[]{
            "isDigit(char ch)", "isLetter(char ch)", "isLetterOrDigit(char ch)", "isUpperCase(char ch)",
            "isLowerCase(char ch)", "isWhitespace(char ch)", "toUpperCase(char ch)", "toLowerCase(char ch)", "getNumericValue(char ch)"
        }, new String[]{"boolean", "boolean", "boolean", "boolean", "boolean", "boolean", "char", "char", "int"});
        
        addJavaClass("BigInteger", new String[]{
            "valueOf(long val)", "add(BigInteger val)", "subtract(BigInteger val)", "multiply(BigInteger val)",
            "divide(BigInteger val)", "remainder(BigInteger val)", "mod(BigInteger m)", "pow(int exponent)",
            "gcd(BigInteger val)", "abs()", "negate()", "compareTo(BigInteger val)", "toString()"
        }, new String[]{"BigInteger", "BigInteger", "BigInteger", "BigInteger", "BigInteger", "BigInteger", "BigInteger", "BigInteger", "BigInteger", "BigInteger", "BigInteger", "int", "String"});
        
        addJavaClass("System", new String[]{
            "out.println()", "out.print()", "out.printf(String format, Object... args)",
            "currentTimeMillis()", "nanoTime()", "exit(int status)", "arraycopy(Object src, int srcPos, Object dest, int destPos, int length)"
        }, new String[]{"void", "void", "PrintStream", "long", "long", "void", "void"});
    }
    
    private void addJavaClass(String className, String[] members, String[] returnTypes) {
        List<CompletionItem> items = new ArrayList<>();
        for (int i = 0; i < members.length; i++) {
            String member = members[i];
            String returnType = i < returnTypes.length ? returnTypes[i] : "void";
            String detail = returnType + " " + member;
            items.add(new CompletionItem(member, returnType, "method", detail, member));
        }
        javaClassMembers.put(className, items);
    }
    
    private void initCppCompletions() {
        String[] keywords = {
            "int", "long", "short", "char", "float", "double", "void", "bool", "auto",
            "const", "static", "extern", "register", "volatile", "signed", "unsigned",
            "if", "else", "switch", "case", "default", "break", "continue",
            "for", "while", "do", "goto", "return",
            "struct", "union", "enum", "typedef", "sizeof",
            "class", "public", "private", "protected", "virtual", "override", "friend",
            "new", "delete", "this", "operator", "template", "typename",
            "try", "catch", "throw", "namespace", "using",
            "inline", "constexpr", "nullptr", "decltype", "noexcept"
        };
        
        for (String keyword : keywords) {
            cppKeywords.add(new CompletionItem(keyword, "keyword", "keyword", keyword, keyword));
        }
        
        String[] stlContainers = {
            "vector", "list", "deque", "queue", "stack", "priority_queue",
            "set", "multiset", "unordered_set", "map", "multimap", "unordered_map",
            "pair", "tuple", "array", "bitset", "string"
        };
        
        for (String container : stlContainers) {
            cppSTL.add(new CompletionItem(container, "class", "class", "std::" + container, container));
        }
        
        addCppFunctions("vector", new String[]{
            "push_back(const T& val)", "pop_back()", "size()", "empty()", "clear()",
            "front()", "back()", "begin()", "end()", "rbegin()", "rend()",
            "insert(iterator pos, const T& val)", "erase(iterator pos)", "erase(iterator first, iterator last)",
            "resize(size_type n)", "reserve(size_type n)", "at(size_type n)", "operator[](size_type n)"
        });
        
        addCppFunctions("string", new String[]{
            "size()", "length()", "empty()", "clear()",
            "push_back(char c)", "pop_back()", "append(const string& str)",
            "substr(size_type pos, size_type n)", "find(const string& str)", "rfind(const string& str)",
            "replace(size_type pos, size_type n, const string& str)", "insert(size_type pos, const string& str)",
            "erase(size_type pos, size_type n)", "c_str()", "at(size_type pos)", "operator[](size_type pos)"
        });
        
        addCppFunctions("set", new String[]{
            "insert(const value_type& val)", "erase(const value_type& val)", "find(const value_type& val)",
            "count(const value_type& val)", "size()", "empty()", "clear()",
            "begin()", "end()", "lower_bound(const value_type& val)", "upper_bound(const value_type& val)"
        });
        
        addCppFunctions("map", new String[]{
            "insert(const value_type& val)", "erase(const key_type& k)", "find(const key_type& k)",
            "count(const key_type& k)", "size()", "empty()", "clear()",
            "begin()", "end()", "lower_bound(const key_type& k)", "upper_bound(const key_type& k)",
            "operator[](const key_type& k)", "at(const key_type& k)"
        });
        
        addCppFunctions("queue", new String[]{
            "push(const value_type& val)", "pop()", "front()", "back()", "size()", "empty()"
        });
        
        addCppFunctions("priority_queue", new String[]{
            "push(const value_type& val)", "pop()", "top()", "size()", "empty()"
        });
        
        addCppFunctions("stack", new String[]{
            "push(const value_type& val)", "pop()", "top()", "size()", "empty()"
        });
        
        addCppFunctions("deque", new String[]{
            "push_back(const T& val)", "push_front(const T& val)", "pop_back()", "pop_front()",
            "front()", "back()", "size()", "empty()", "clear()", "at(size_type n)", "operator[](size_type n)"
        });
        
        addCppFunctions("pair", new String[]{
            "first", "second", "make_pair(T1 x, T2 y)"
        });
        
        addCppFunctions("algorithm", new String[]{
            "sort(RandomAccessIterator first, RandomAccessIterator last)",
            "sort(RandomAccessIterator first, RandomAccessIterator last, Compare comp)",
            "stable_sort(RandomAccessIterator first, RandomAccessIterator last)",
            "binary_search(ForwardIterator first, ForwardIterator last, const T& val)",
            "lower_bound(ForwardIterator first, ForwardIterator last, const T& val)",
            "upper_bound(ForwardIterator first, ForwardIterator last, const T& val)",
            "find(InputIterator first, InputIterator last, const T& val)",
            "find_if(InputIterator first, InputIterator last, Predicate pred)",
            "count(InputIterator first, InputIterator last, const T& val)",
            "reverse(BidirectionalIterator first, BidirectionalIterator last)",
            "rotate(ForwardIterator first, ForwardIterator middle, ForwardIterator last)",
            "swap(T& a, T& b)", "min(const T& a, const T& b)", "max(const T& a, const T& b)",
            "min_element(ForwardIterator first, ForwardIterator last)",
            "max_element(ForwardIterator first, ForwardIterator last)",
            "next_permutation(BidirectionalIterator first, BidirectionalIterator last)",
            "prev_permutation(BidirectionalIterator first, BidirectionalIterator last)",
            "nth_element(RandomAccessIterator first, RandomAccessIterator nth, RandomAccessIterator last)",
            "unique(ForwardIterator first, ForwardIterator last)",
            "remove(ForwardIterator first, ForwardIterator last, const T& val)",
            "fill(ForwardIterator first, ForwardIterator last, const T& val)",
            "copy(InputIterator first, InputIterator last, OutputIterator result)",
            "for_each(InputIterator first, InputIterator last, Function fn)",
            "accumulate(InputIterator first, InputIterator last, T init)"
        });
        
        addCppFunctions("cmath", new String[]{
            "abs(double x)", "fabs(double x)", "floor(double x)", "ceil(double x)", "round(double x)",
            "sqrt(double x)", "pow(double base, double exponent)", "exp(double x)", "log(double x)", "log10(double x)",
            "sin(double x)", "cos(double x)", "tan(double x)", "asin(double x)", "acos(double x)", "atan(double x)",
            "sinh(double x)", "cosh(double x)", "tanh(double x)", "fmod(double x, double y)"
        });
        
        addCppFunctions("cstring", new String[]{
            "strlen(const char* str)", "strcpy(char* dest, const char* src)", "strcat(char* dest, const char* src)",
            "strcmp(const char* str1, const char* str2)", "strncmp(const char* str1, const char* str2, size_t n)",
            "memcpy(void* dest, const void* src, size_t n)", "memset(void* ptr, int value, size_t n)",
            "memmove(void* dest, const void* src, size_t n)", "memcmp(const void* ptr1, const void* ptr2, size_t n)"
        });
        
        addCppFunctions("cstdio", new String[]{
            "printf(const char* format, ...)", "scanf(const char* format, ...)",
            "sprintf(char* str, const char* format, ...)", "sscanf(const char* str, const char* format, ...)",
            "fprintf(FILE* stream, const char* format, ...)", "fscanf(FILE* stream, const char* format, ...)",
            "gets(char* str)", "puts(const char* str)", "getchar()", "putchar(int c)",
            "fopen(const char* filename, const char* mode)", "fclose(FILE* stream)", "feof(FILE* stream)"
        });
        
        addCppFunctions("iostream", new String[]{
            "cin >> var", "cout << var", "cerr << var", "endl", "flush",
            "getline(istream& is, string& str)", "cin.get()", "cin.getline(char* s, streamsize n)"
        });
    }
    
    private void addCppFunctions(String className, String[] functions) {
        List<CompletionItem> items = new ArrayList<>();
        for (String func : functions) {
            items.add(new CompletionItem(func, "function", "function", func, func));
        }
        cppFunctions.put(className, items);
    }
    
    public List<CompletionItem> getCompletions(String className, String prefix, String language) {
        List<CompletionItem> result = new ArrayList<>();
        
        if ("cpp".equals(language) || "c".equals(language)) {
            if (className != null && !className.isEmpty()) {
                List<CompletionItem> classItems = cppFunctions.get(className);
                if (classItems != null) {
                    for (CompletionItem item : classItems) {
                        if (prefix == null || prefix.isEmpty() || item.getName().toLowerCase().startsWith(prefix.toLowerCase())) {
                            result.add(item);
                        }
                    }
                }
            } else {
                result.addAll(cppKeywords);
                result.addAll(cppSTL);
                for (Map.Entry<String, List<CompletionItem>> entry : cppFunctions.entrySet()) {
                    if (!entry.getKey().equals("algorithm") && !entry.getKey().equals("cmath") 
                        && !entry.getKey().equals("cstring") && !entry.getKey().equals("cstdio")
                        && !entry.getKey().equals("iostream")) {
                        result.add(new CompletionItem(entry.getKey(), "class", "class", "std::" + entry.getKey(), entry.getKey()));
                    }
                }
            }
        } else {
            if (className != null && !className.isEmpty()) {
                List<CompletionItem> classItems = javaClassMembers.get(className);
                if (classItems != null) {
                    for (CompletionItem item : classItems) {
                        if (prefix == null || prefix.isEmpty() || item.getName().toLowerCase().startsWith(prefix.toLowerCase())) {
                            result.add(item);
                        }
                    }
                }
            } else {
                for (Map.Entry<String, List<CompletionItem>> entry : javaClassMembers.entrySet()) {
                    if (prefix == null || prefix.isEmpty() || entry.getKey().toLowerCase().startsWith(prefix.toLowerCase())) {
                        result.add(new CompletionItem(entry.getKey(), "class", "class", entry.getKey(), entry.getKey()));
                    }
                }
            }
        }
        
        return result;
    }
    
    public List<CompletionItem> getAllClasses(String language) {
        List<CompletionItem> result = new ArrayList<>();
        
        if ("cpp".equals(language) || "c".equals(language)) {
            result.addAll(cppSTL);
        } else {
            for (String className : javaClassMembers.keySet()) {
                result.add(new CompletionItem(className, "class", "class", className, className));
            }
        }
        
        return result;
    }
}
