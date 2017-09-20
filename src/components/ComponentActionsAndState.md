---------------------
#Comment.js 
##Actions##
VOTECOMMENTUP
VOTECOMMENTDOWN
DELETECOMMENT
EDITCOMMMENT

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
VOTEPOSTUP
VOTEPOSTDOWN
DELETEPOST
EDITPOST

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
COMMENTFORMSAVED
COMMENTFORMCANCELLED

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
POSTFORMSAVED
POSTFORMCANCELLED

##State## (everything that can be changed, plus id, if pertinent)
body
title
username
category

--------------------
#SimplePost.js
##ACTIONS##
VOTEPOSTUP
VOTEPOSTDOWN
DELETEPOST
EDITPOST

##State## (everything that can be changed, plus id, if pertinent)
voteScore
timeStamp
author
id
category

--------------------
#TopBar.js
##ACTIONS##
CREATENEWPOST
SORTBYVOTETOTAL
SORTBYDATE
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
