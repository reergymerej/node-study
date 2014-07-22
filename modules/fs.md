appendFile - adds String/Buffer data to the end of a file, creates file if needed
chmod - CHange MODe, changes file/directory permissions
chown - CHange OWNer, changes owner of file/dir
close - closes file, file descriptors open/lock a file, this closes it
exists - deprecated, checks if a file exists - Don't do this.  Just open the file and handle errors if it's not there.
fchmod - File CHange MODe, change permissions of a file.  Like chmod, but uses file descriptor instead of file path.
fchown - File CHange OWNer, change file owner.  Like chown, but uses file descriptor instead of path name.
fstat - Get stat info about a file by file descriptor.
fsync - Commits file changes to disc if they are hanging out in the kernel filesystem buffers.  Uses file descriptor.
ftruncate - sets a file's length, trims if needed or fills with null to reach length, like truncate, but uses file descriptor
futimes - changes a file's last accessed/modified times by file descriptor
lchmod - Mac only CHange MODe for file, like chmod, but if the file is a symbolic link, it will change the link's bits.
lchown - CHange OWNer, but doesn't follow symbolic links.
link - rewrites an existing file to reference another file (links them).  These become the same file in two places, so change either updates the other.
lstat - like stat, but doesn't follow links
mkdir - makes a directory
open - opens (and may create) a file, returns file descriptor
read - reads a file's contents into a buffer, uses file descriptor
readdir - get an array of file names in dir, excluding . and ..
readFile - reads a file's contents, much easier than read
readlink - reads a symbolic link's value
realpath - returns an absolute pathname, may use process.cwd()
rename - renames a file/directory
rmdir - remove directory
stat - get a fs.Stats for a path
symlink - create a symbolic link to a file
truncate - truncates a file
unlink - deletes a file 
unwatchFile - unstable, use watch
utimes
watch
watchFile
write
writeFile
writeSync

createReadStream
createWriteStream
