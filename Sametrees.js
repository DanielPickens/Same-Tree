	//my first solution:
  
  var isSameTree = function(p, q) {
   /*
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
