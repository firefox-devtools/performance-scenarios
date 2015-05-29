# performance-scenarios

Simple web pages to illustrate various aspects of web performance.

* animation-transform-margin: a web page to compare animating using margin versus animating using transform, and how that shows up in the frame rate and waterfall tools. See [Animating CSS properties](https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Animating_CSS_properties#An_example.3A_margin_versus_transform).

* js-call-tree-1: a web page that compares three different sorting algorithms: bubble sort, selection sort, quicksort. Used in the docs for the [Call Tree tool](https://developer.mozilla.org/en-US/docs/Tools/Performance/Call_Tree).

* js-call-tree-2: a web page that lets you generate some random arrays, then lets you sort them. By default it uses bubble sort. The page also contains a quicksort implementation that's easy to switch to. You could use this to demo the Call Tree: create a profile using bubble sort, then "fix" it by changing the sorting algorithm, and create a new profile to see the difference.

* js-worker: a web page that does some pointless computations. It has three modes: do the pointless computations synchronously, do them using requestAnimationFrame, and do them in a worker. Used in [Intensive JavaScript](https://developer.mozilla.org/en-US/docs/Tools/Performance/Scenarios/Intensive_JavaScript).

* layout-thrashing: WIP page that does layout thrashing. For a possible future walkthrough on that.

