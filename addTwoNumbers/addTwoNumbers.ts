
class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

/**
 * Add two numbers represented by two linked lists
 * @param l1 
 * @param l2 
 * @returns 
 */

// Time Complexity - O(n) where n is the number of digits in the linked list
// Space Complexity - O(1)
function addTwoNumbers(l1: ListNode | null, l2: ListNode | null) {
    let curr = new ListNode();
    let tempNode = curr;
    let remain = 0;

    while (l1 != null || l2 != null || remain !== 0) {
        let sum = remain;

        if (l1 != null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 != null) {
            sum += l2.val;
            l2 = l2.next;
        }

        remain = sum >= 10 ? 1 : 0;
        curr.next = new ListNode(sum >= 10 ? sum - 10 : sum);
        curr = curr.next;
        if (!l1 && !l2 && remain) {
            curr.next = new ListNode(remain);
            curr = curr.next;
            remain = 0;
        }
    }
    return tempNode.next;
}

function createList(node: ListNode, nums: number[]): ListNode {
    for (let i = 0; i < nums.length; i++) {
        let num = nums.shift()
        node.next = createList(new ListNode(num), nums);
    }
    return node;
}
let l1 = createList(new ListNode(2), [4, 9]);
let l2 = createList(new ListNode(5), [6, 4, 9]);
console.log(l1)
console.log(addTwoNumbers(l1, l2))