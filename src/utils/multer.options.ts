import { diskStorage } from 'multer';
import * as fs from 'fs';

const storage = diskStorage({
  destination: './uploads/images',
  filename: (_, file, callback) => {
    callback(null, `${Date.now()}-${file.originalname}`);
  },
});

export const multerOptions = {
  storage: {
    _handleFile: function _handleFile(req, file, cb) {
      storage._handleFile(req, file, function (err, info) {
        if (err) {
          return cb(err);
        }

        fs.readFile(info.path, (err, buffer) => {
          if (err) {
            return cb(err);
          }

          // Preserve the buffer
          file.buffer = buffer;

          cb(null, info);
        });
      });
    },
    _removeFile: storage._removeFile,
  },
};
