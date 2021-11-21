# Coding Interview script & Clarification question

## Read (listen) the question

Take your time and read the question or listen carefully to what your interviewer says to you. Try not to be distracted and do not think about the solution just yet. Understand the problem.

---

## Before we start

Re-state the question and confirm you’ve understood it

---
## Ask clarification questions

### General

1. What if the input is empty (empty tree, string, array, etc.)?
2.  Can we have negative numbers in the input?
3.  Could there be an integer overflow?
4.  Is input sorted?
5.  Can we modify the input?
6.  Is input only integers?
7.  Can we have repetitions?
8.  What if there are multiple answers?
9.  What if there is no answer at all?
10. Is input always valid, or should we expect 
11. some garbage in input?
12. If the task includes some external calls 
(like handle file operations, network 
connections)
13. Should we handle failures in external systems?
14. Should output go in a particular order? (if applicable)

### Arrays

1. Can the array be empty?
2. If there are multiple arrays, are they of the same size?
3. Is the array sorted?
4. Are there repetitions in the array?

### Graphs

1. Are there cycles in the graphs?
2. Could vertices have negative values?
3. Could edge weights be negative?
4. Do all vertices have distinct values
5. Directed or undirected?
6. Weighted or unweighted?

### Strings

1. What characters are possible?
2. Are all characters lowercase or uppercase also possible?
3. Is the result case-sensitive? I.e., should we treat uppercase letters equal to lowercase?
4. Is there any punctuation in the string?
5. Can we consider the input string as valid? For example, if it is a CSV file, what if there are some lines with an extra comma in
6. the line changing the number of fields?

### Scalability

1. What is the size of the input? Does it all fit the memory?

### Functionality

1. Is that all the functionality of this code? Are there some future requirements?

----

## Examples

    Write down example test cases. These should include

1. General-case example.
2. Couple of edge-case examples that you have extracted during the previous part of the interview.
You will use this later to verify your initial idea and the code you have written.

You will use this later to verify your initial idea and the code you have written.


## Bruteforce solution
1. Explain bruteforce solution if it is obvious.
2. If bruteforce solution is easy and can easily be optimized in-place, then code it.

## Optimal solution

Now once you come up with the bruteforce solution, try to optimize it.

If you can’t come up with anything, listen carefully for interviewer hints.

You can try to write down a bruteforce solution. This solution might be helpful for you in 2 possible ways:

1. You’ll see the pattern for optimization.
2. You’ll have at least something written that will put something on your “coding” skill ability, even if it will be nothing on the “algorithms” side.

At this step, it is also essential to test your solution against the examples you’re given (even if you think it is obvious).

## Design the structure of your solution

This part is necessary to demonstrate the following skills:

1. Ability to decompose solution into subproblems and code them separately, so you’ll get more readable and clean code.

2. OOP skills. If there are some objects you can introduce to your solution, you should use this opportunity to do it and impress your interviewer (well, in most cases, it is expected from you, so not really impress, but do the right thing). So, for example, if there are any Enums you can use, do that. You’ll also definitely need to write structures for graph nodes if you have a graph task.

## Write the code
  Important things here:

1. You should be typing pretty fast but without mistakes.
   
2. While coding, it is necessary to explain what you are doing. I don’t mean to explain every line of the code but rather a general idea of what’s happening.
   
3. If any validation is possible, you should do it. For example, validate that your input has only positive numbers, as the problem description states.

## Verify your code

This step is VERY important. You should verify your code. Line by line, simple as that.

Go over the examples you constructed at the beginning.

## Discuss how to make the code production ready

1. Discuss with the customer what requirements do they have:
   * Scalability.
   * Functionality.
   * Will it be used externally, or is it only for internal use?

2. Split code to the functions/classes/whatever.
3. Split the code into files and move the parts that could be used outside into some libraries.
4. Write unittests.
5. Write integration tests.
6. Conduct stress tests. 
7. Think about how to make it more robust:
   * Input is incorrect. Should we handle that?
   * Process is being killed. How will it continue?
8. Design the external API (protobuf/JSON/whatever).

9. What if we want to run a lot of the processes concurrently?
   * How to avoid clashes between different services for data, race conditions, etc.
10. Do we need a database for that?
   * SQL?
   * KV store?
   * Map-reduce?
11. Think about how to monitor your app in production.

## Scale your code

Think about how to solve the task if the input is huge.

* Database: SQL/KV store/Map-reduce
* Distributed processing (map-reduce or something like that)
* Do we need the exact result? If not, we can sample data. In most inputs, it will give a pretty good estimation.