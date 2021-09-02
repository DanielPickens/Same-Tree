	//my first solution:
  
  var isSameTree = function(p, q) {
   /*
    let q = root || if head1 >= null
    let p = head1 || if head2 <= null
};
*/
    
    
  //  first, there are three basic cases
    	if (p == null & q == null) {
			return true;
		}
        if (p == null && q!= null || q == null && p != null) {
			return false;
		}
        if (p.val != q.val) {
			return false;
		}else {
			return true && isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
		}   
  }
}


//solution 2:
