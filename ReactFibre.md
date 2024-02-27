# 20 points for React Fibre
React Fiber ka purpose hai React ke core algorithm ko re-implement karna, jo React ke two years ke research ka natija hai.
Fiber ke goal hai React ko animation, layout, aur gestures jaise areas me zyada suitable banane ka, incremental rendering ke saath.
Incremental rendering me rendering work ko chunks me divide karke multiple frames me spread kiya jata hai.
Fiber ke key features me work ko pause, abort, ya reuse karne ki capability, priority dena, aur new concurrency primitives shamil hain.
Fiber ko samajhne ke liye aapko React ke basic concepts, jaise components, elements, instances, aur reconciliation ke bare me pata hona chahiye.
Reconciliation ek algorithm hai jo ek tree ko dusre tree ke saath diff karke determine karta hai ki kaun se parts ko change karna hai.
Rendering aur reconciliation alag alag phases hai, jisme reconciler work ko compute karta hai aur renderer us information ko use karta hai actual update karne ke liye.
Fiber ke baare me padhne se pehle aapko React ke basic concepts ko review karna chahiye.
Fiber ka goal hai React ko scheduling ka advantage lene me madad karna, jisme work ko pause, abort, aur priority dene ki capability hoti hai.
Work ko units me divide karne ke liye fibers ka use kiya jata hai, jo work ko represent karta hai.
Fiber ka purpose hai React components ke liye stack ko reimplement karna, jisme work ko units me break kiya ja sake.
Ye stack ko reimplement karne se aap stack frames ko memory me rakh kar execute kar sakte hain jaise aur jab aap chahein.
Fibers ke alawa, stacks frames ke manual deal karne se features jaise concurrency aur error boundaries ko unlock kiya ja sakta hai.
Fiber ka structure ek JavaScript object hota hai jo component, input, aur output ke baare me information deta hai.
Fiber ek stack frame ko represent karta hai, lekin ye ek component instance ko bhi represent karta hai.
Fiber me kuch important fields hote hain jaise type, key, child, sibling, return, pendingProps, memoizedProps, pendingWorkPriority, alternate, output, aur work-in-progress.
Type aur key ka use reconciliation ke dauran hota hai ki kaun se fibers ko reuse kiya ja sakta hai.
Child aur sibling fields fibers ke recursive tree structure ko describe karte hain.
Child fiber ek component ke render method ka return value hota hai.
Fiber ka ultimate output renderer ko diya jata hai taaki wo changes ko rendering environment me flush kar sake.
