This post contains all you need to know about [Node.js's buffer module](http://nodejs.org/api/buffer.html#buffer_buffer).  It's easier than you think.


# What's a Buffer?

Buffers are used for handling octet streams (sequential chunks of data) because, surprise, not all files are text files.  A buffer is like an array of octets (bytes).

The buffer module is at the core of Node, so it's global.  There's no need to require it before using the Buffer class.


# How to Create a Buffer

There are three ways to create a Buffer.

1. `new Buffer(size)`

    Pass the length of the new Buffer to the constructor, and you'll get a Buffer with `size` octets.

2. `new Buffer(array)`

    Got an array of octets but wish you could use cool Buffer methods?  Pass the array into the constructor and wish no longer.

3. `new Buffer(str, [encoding])`

    Pass a string into the constructor and it will be encoded into octets.  By default, the encoding is 'utf8'.  


#How to Use a Buffer

##Basic Stuff

Access a specific octet with the `[]` operator, just like an Array.

    > var b = new Buffer([1, 2, 3]);
    undefined
    > b[2]
    3
    > b[2] = 9;
    9
    > b[2]
    9

The length of the Buffer is available as `length`, surprise!  This is the size of the memory set aside for the Buffer, *not the length of the set octects*.  Technically, you can change the length, but it may break your Buffer.  Only get it, don't set it.

    > var b = new Buffer(10);
    undefined
    > b.length
    10
    > b.length = 11;
    11
    > b
    RangeError: out of range index


##Methods

There are a lot of buffer methods, but if you categorize them like this, it's less intimidating.

###Standard

* copy
* fill
* slice
* toJSON
* toString

###Static Methods

* byteLength
* concat
* isBuffer
* isEncoding

###Read/Write Methods

This makes up the majority, but they follow a pattern.

##Methods Explained

####copy
buf.copy(targetBuffer, [targetStart], [sourceStart], [sourceEnd])

Copy a section of one buffer into another.


####fill
buf.fill(value, [offset], [end])

Fill a buffer with a value.  This is a good idea since a newly created buffer may have "dirty" memory in it.  See?

    > var b = new Buffer(100)
    undefined
    > b.toString()
    '\u0000\u0000��6=�\u0000\u0000�9^\u0001\u0000\u0000\u0000\u0000�9^\u0001\u0000\u0000\u0000\u0000\n\u0000\u0000\u0000\u0000\u0000\u0000\u0000h:^\u0001\u0000\u0000\u0000\u0000\u0005\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000�����\u0000\u0000\u0000\u0000\u0000\u0000\u0001\u0000\u0000\u0000\u0002\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000\u0000'


####slice
buf.slice([start], [end])

Crop a section of the buffer into a new buffer.  The returned buffer references the same memory, so changing one will change both.


####toJSON
buf.toJSON()

Returns POJO with buffer info.


####toString
buf.toString([encoding], [start], [end])

Converts octets to string.  The default encoding is 'utf8'.


####byteLength
Buffer.byteLength(string, [encoding])

See how many bytes it takes to encode a string.  For complex characters, this may be longer than the string's length.


####concat
Buffer.concat(list, [totalLength])

Returns an array of buffers (list) combined into one new buffer.


####isBuffer
Buffer.isBuffer(obj)

Check if obj is a buffer.  If you think there's a reason to use this, you're wrong.

    var b = new Buffer(10);
    undefined
    > var jsonB = b.toJSON();
    undefined
    > jsonB
    { type: 'Buffer', data: [ 0, 0, 0, 0, 40, 30, 94, 1, 0, 0 ] }
    > Buffer.isBuffer(jsonB)
    false

This is stupid, as it's just an instanceof check.  I suppose it's OK to use in case one day it does something more.  For now, this is it.

    > Buffer.isBuffer.toString()
    'function isBuffer(b) {\n  return util.isBuffer(b);\n}'
    > util.isBuffer.toString()
    'function isBuffer(arg) {\n  return arg instanceof Buffer;\n}'


####isEncoding
Buffer.isEncoding(encoding)

Test to see if an encoding is something buffers know how to work with.


###Read/Write Methods

I'm not going to bother explaining each of these, but I'll give you a few hints.

Int16: 16 bit integer
UInt16: unsigned 16 bit integer
LE: Little Endian
BE: Big Endian
noAssert: Don't verify this is a valid range within the buffer.


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


##Unmentionables

Technically, these are in the buffer module as well and, since I promised this is all you need to know, I will mention them.  Don't even bother to read this, though.

buffer.INSPECT_MAX_BYTES

This determines how many bytes are returned when inspecting the buffer.  Of course, this only applies to modules loaded with require, and there's no reason to require the buffer module since it's already there.

Class: SlowBuffer

This is an internal class used to speed up how memory is grabbed.  The docs explicitly say not to use this.