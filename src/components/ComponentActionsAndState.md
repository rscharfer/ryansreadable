---------------------
#Comment.js 
##Actions##
VOTECOMMENTUP - done
VOTECOMMENTDOWN - done
DELETECOMMENT - done
EDITCOMMMENT - done

##State## (pertinent characteristics from each component)
voteScore
timeStamp
author
body
id
parentPostId

----------------------
#DetailedPost.js
##ACTIONS##
VOTEPOSTUP - done
VOTEPOSTDOWN - done
DELETEPOST -done
EDITPOST - done

##State## (pertinent characteristics from each component)
voteScore
timeStamp
author
body
id
category

---------------------
#NewCommentForm.js
##ACTIONS##
COMMENTFORMSAVED - done 
FORMCANCELLED - done

##State## (everything that can be changed, plus id, if pertinent)
author
body

--------------------
#PostContainer.js
##ACTIONS##

##State##
posts

--------------------
#PostDetailPage.js
##ACTIONS##

##State## (everything that can be changed, plus id, if pertinent)
post
comments

--------------------
#PostForm.js
##ACTIONS##
POSTFORMSAVED - done
FORMCANCELLED - done

##State## (everything that can be changed, plus id, if pertinent)
body
title
username
category

--------------------
#SimplePost.js
##ACTIONS##
VOTEPOSTUP - done
VOTEPOSTDOWN - done
DELETEPOST - done
EDITPOST - done

##State## (everything that can be changed, plus id, if pertinent)
voteScore
timeStamp
author
id
category

--------------------
#TopBar.js
##ACTIONS##
CREATENEWPOST - done
SORTBYVOTETOTAL - done
SORTBYDATE - done
SHOWONLYREDUX
SHOWONLYREACT
SHOWONLYUDACITY
SHOWALL

##State##

--------------------
Delete.js
##ACTIONS##

##State##
postOrComment
idOfPostOrComment

--------------------
Edit.js
##ACTIONS##

##State##
postOrComment
idOfPostOrComment

--------------------
SimplePostTitle.js
##ACTIONS##

##State##
postId
text

--------------------
VoteDown.js
##ACTIONS##

##State##
postOrComment
idOfPostOrComment

--------------------
VoteUp.js
##ACTIONS##

##State##
postOrComment
idOfPostOrComment







-------------------------------------------------------------
###ReduxState###

posts (non-deleted-posts)
	voteScore // number
	timeStamp // number
	author // string
	body // string
	id  // string
	category  // string
comments (of non-deleted-posts)
	voteScore  // number
	timeStamp  // number
	author // string
	body // string
	id  // string
	parentPostId  // string
defaultView (or detailed)  // boolean
whichDefaultView   // string
editSomething  // string  // comment,post,none
editID // string
