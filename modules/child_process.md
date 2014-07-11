Buffer

What is a buffer?

Why would you use one?

Is it only for text?
    no, it's mainly for binary files

================================================
This post contains all you need to know about Node.js's buffer module (http://nodejs.org/api/buffer.html#buffer_buffer).  Open a console, start up Node, and follow along.  It's easier than you think.


What's a Buffer?
================================================

Buffers are used for handling octet streams (sequential chunks of data) because, surprise, not all files are text files.  A buffer is like an array of octets (bytes).

The buffer module is at the core of Node, so it's global.  There's no need to require it before using the Buffer class.

    > typeof buffer
    'object'
    > typeof Buffer
    'function'
    > Buffer === buffer.Buffer
    true


How to Create a Buffer
================================================

There are three ways to create a Buffer.

1. new Buffer(size)

Pass the length of the new Buffer to the constructor, and you'll get a Buffer with 'size' octets.

    > var b = new Buffer(3);
    undefined
    > b.toString()
    '\u0000\u0000\u0000'
    > b.length
    3
    
2. new Buffer(array)

Got an array of octets but wish you could use cool Buffer methods?  Pass the array into the constructor and wish no longer.

    > var b = new Buffer([1, 2, 3, 4, 5]);
    undefined
    > b
    <Buffer 01 02 03 04 05>
    > b.toString();
    '\u0001\u0002\u0003\u0004\u0005'


3. new Buffer(str, [encoding])

Pass a string into the constructor and it will be encoded into octets.  By default, the encoding is 'utf8'.  


How to Use a Buffer
================================================

# Basic Stuff

Access a specific octet with the [] operator, just like an Array.

    > var b = new Buffer([1, 2, 3]);
    undefined
    > b[2]
    3
    > b[2] = 9;
    9
    > b[2]
    9

The length of the Buffer is available as length, surprise!  This is the size of the memory set aside for the Buffer, not the length of the set octects.  Technically, you can change the length, but it may break your Buffer.  Only get it, don't set it.

    > var b = new Buffer(10);
    undefined
    > b.length
    10
    > b.length = 11;
    11
    > b
    RangeError: out of range index
        at Buffer.toString (buffer.js:221:21)
        at Buffer.inspect (buffer.js:257:16)
        at formatValue (util.js:221:21)
        at Object.inspect (util.js:147:10)
        at REPLServer.self.writer (repl.js:209:19)
        at finish (repl.js:316:38)
        at REPLServer.defaultEval (repl.js:144:5)
        at bound (domain.js:256:14)
        at REPLServer.runBound [as eval] (domain.js:269:12)
        at Interface.<anonymous> (repl.js:277:12)


# Methods

buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])
buf.fill(value, [offset], [end])
    
    > var b1 = new Buffer(10);
    undefined
    > b1.fill(3);
    <Buffer 03 03 03 03 03 03 03 03 03 03>
    > var b2 = new Buffer(20);
    undefined
    > b2.fill(6);
    <Buffer 06 06 06 06 06 06 06 06 06 06 06 06 06 06 06 06 06 06 06 06>
    > b1.copy(b2, 10, 0, 3);
    3
    > b1
    <Buffer 03 03 03 03 03 03 03 03 03 03>
    > b2
    <Buffer 06 06 06 06 06 06 06 06 06 06 03 03 03 06 06 06 06 06 06 06>
    > 


buf.slice([start], [end])
buf.toJSON()
buf.toString([encoding], [start], [end])


Unmentionables
================================================

buffer.INSPECT_MAX_BYTES




Static Methods
================================================

Class Method: Buffer.byteLength(string, [encoding])
Class Method: Buffer.concat(list, [totalLength])
Class Method: Buffer.isBuffer(obj)
Class Method: Buffer.isEncoding(encoding)




Methods
================================================



buf.readDoubleBE(offset, [noAssert])
buf.readDoubleLE(offset, [noAssert])
buf.readFloatBE(offset, [noAssert])
buf.readFloatLE(offset, [noAssert])
buf.readInt16BE(offset, [noAssert])
buf.readInt16LE(offset, [noAssert])
buf.readInt32BE(offset, [noAssert])
buf.readInt32LE(offset, [noAssert])
buf.readInt8(offset, [noAssert])
buf.readUInt16BE(offset, [noAssert])
buf.readUInt16LE(offset, [noAssert])
buf.readUInt32BE(offset, [noAssert])
buf.readUInt32LE(offset, [noAssert])
buf.readUInt8(offset, [noAssert])
buf.write(string, [offset], [length], [encoding])
buf.writeDoubleBE(value, offset, [noAssert])
buf.writeDoubleLE(value, offset, [noAssert])
buf.writeFloatBE(value, offset, [noAssert])
buf.writeFloatLE(value, offset, [noAssert])
buf.writeInt16BE(value, offset, [noAssert])
buf.writeInt16LE(value, offset, [noAssert])
buf.writeInt32BE(value, offset, [noAssert])
buf.writeInt32LE(value, offset, [noAssert])
buf.writeInt8(value, offset, [noAssert])
buf.writeUInt16BE(value, offset, [noAssert])
buf.writeUInt16LE(value, offset, [noAssert])
buf.writeUInt32BE(value, offset, [noAssert])
buf.writeUInt32LE(value, offset, [noAssert])
buf.writeUInt8(value, offset, [noAssert])




Class: SlowBuffer



================================================







Notes
================================================

used for dealing with octet streams (binary files)

Buffer is similar to an array of integers

Buffer cannot be resized

Buffer is global, so you don't need to require it

converting Buffer to JS string requires explicit encoding


Classes
================================================

Buffer

SlowBuffer


Constructor
================================================

Buffer can be constructed 3 ways
    * specify number of octets in the Buffer
    * specify the array of octets
    * specify a string to be encoded into octets


Class Methods
================================================

Buffer.isEncoding(encoding) - Test if "encoding" is a valid string to be used for encoding.

Buffer.isBuffer(obj) - Test if "obj" is a Buffer.

Buffer.bytLength(string, [encoding]) - gets byte length of string (not the same as # of characters in a string)

Buffer.concat(list, [totalLength]) - concatenates an array of buffers



Methods
================================================

write(string, [offset], [length], [encoding]) - writes "string" into the buffer (or at least what will fit)

toString([encoding], [start], [end]) - gets string from octets

toJSON() - returns a JSON object of the buffer; has data array

copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd]) - copy octets from one buffer into another

slice([start], [end]) - get a new buffer referencing a subset of this buffer's memory

readUInt8(offset, [noAssert])
readUInt16LE(offset, [noAssert])
readUInt16BE(offset, [noAssert])
readUInt32LE(offset, [noAssert])
readUInt32BE(offset, [noAssert])
readInt8(offset, [noAssert])
readInt16LE(offset, [noAssert])
readInt16BE(offset, [noAssert])
readInt32LE(offset, [noAssert])
readInt32BE(offset, [noAssert])
readFloatLE(offset, [noAssert])
readFloatBE(offset, [noAssert])
readDoubleLE(offset, [noAssert])
readDoubleBE(offset, [noAssert])
writeUInt8(value, offset, [noAssert])
writeUInt16LE(value, offset, [noAssert])
writeUInt16BE(value, offset, [noAssert])
writeUInt32LE(value, offset, [noAssert])
writeUInt32BE(value, offset, [noAssert])
writeInt8(value, offset, [noAssert])
writeInt16LE(value, offset, [noAssert])
writeInt16BE(value, offset, [noAssert])
writeInt32LE(value, offset, [noAssert])
writeInt32BE(value, offset, [noAssert])
writeFloatLE(value, offset, [noAssert])
writeFloatBE(value, offset, [noAssert])
writeDoubleLE(value, offset, [noAssert])
writeDoubleBE(value, offset, [noAssert])

fill(value, [offset], [end]) - fill buffer with value


Accesors
================================================

[index] - get/set the octet at "index"


Properties
================================================

length - # of bytes allotted for buffer

INSPECT_MAX_BYTES - bytes returned when .inspect() is called