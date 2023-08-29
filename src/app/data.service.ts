import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  loadQuestionsWithSettings(questionCount: number, questionType: string): any[] {
    
    
    const filteredQuestions = this.questions.filter(question => question.qtyp === questionType);
    return filteredQuestions.slice(0, questionCount);
  }

  loadAllQuestions(questionCount: number): any[] {
    
    return this.questions.slice(0, questionCount);
  }

  
  private questions = [
    {
      "qid": 1,
      "qtyp": "sc",
      "qtxt": [
        "Which type of file system is created by mkfs when it is executed with the block device name only and",
        "without any additional parameters?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. XFS"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. VFAT"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. ext2"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. ext3"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. ext4"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 2,
      "qtyp": "sc",
      "qtxt": [
        "Which umask value ensures that new directories can be read, written and listed by their owning user,",
        "read and listed by their owning group and are not accessible at all for everyone else?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. 0750"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. 0027"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. 0036"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. 7640"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. 0029"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 3,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands changes the number of days before the ext3 filesystem on /dev/sda1",
        "has to run through a full filesystem check while booting?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. tune2fs -d 200 /dev/sda1"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. tune2fs -i 200 /dev/sda1"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. tune2fs -c 200 /dev/sda1"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. tune2fs -n 200 /dev/sda1"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. tune2fs --days 200 /dev/sda1"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 4,
      "qtyp": "sc",
      "qtxt": [
        "Which is the default percentage of reserved space for the root user on new ext4 filesystems?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. 10%"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. 3%"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. 15%"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. 0%"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. 5%"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 5,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following is true when a file system, which is neither listed in /etc/fstab nor known to system,",
        "is mounted manually?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. systemd ignores any manual mounts which are not done using the systemctl mountcommand"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. The command systemctl mountsynccan be used to create a mount unit based on the existing mount"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. systemd automatically generates a mount unit and monitors the mount point without changing it"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. Unless a systemd mount unit is created, systemd unmounts the file system after a short period of time"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. systemctl unmountmust be used to remove the mount because system opens a file descriptor on the mount point"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 6,
      "qtyp": "fi",
      "qtxt": [
        "Which program updates the database that is used by the locate command? (Specify ONLY the command",
        "without any path or parameters)."
      ],
      "qanswers": [
        {
          "txt": [
            "updatedb"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 7,
      "qtyp": "sc",
      "qtxt": [
        "What does the command mount --bind do?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. It makes the contents of one directory available in another directory"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. It mounts all available filesystems to the current directory"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. It mounts all user mountable filesystems to the user’s home directory"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. It mounts all file systems listed in /etc/fstab which have the option userbindset"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. It permanently mounts a regular file to a directory"
          ],
          "correct": false
        }
      ],
      "qcorrect": "A",
      "qinfo": []
    },
    {
      "qid": 8,
      "qtyp": "sc",
      "qtxt": [
        "Consider the following output from the command ls -i:",
        "How would a new file named c.txt be created with the same inode number as a.txt (Inode 525385)?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. ln -h a.txt c.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. ln c.txt a.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. ln a.txt c.txt"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. ln -f c.txt a.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. ln -i 525385 c.txt"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 9,
      "qtyp": "mc",
      "qtxt": [
        "Consider the following directory:",
        " drwxrwxr-x 2 root sales 4096 Jan 1 15:21 sales",
        "Which command ensures new files created within the directory sales are owned by the group sales?",
        "(Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. chmod g+s sales"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. setpol -R newgroup=sales sales"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. chgrp -p sales sales"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. chown --persistent *.sales sales"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. chmod 2775 sales"
          ],
          "correct": true
        }
      ],
      "qcorrect": "AE",
      "qinfo": []
    },
    {
      "qid": 10,
      "qtyp": "mc",
      "qtxt": [],
      "qanswers": [
        {
          "txt": [
            "A. cat /proc/self/mounts"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. free"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. lsmounts"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. mount"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. cat /proc/filesystems"
          ],
          "correct": false
        }
      ],
      "qcorrect": "AD",
      "qinfo": []
    },
    {
      "qid": 11,
      "qtyp": "fi",
      "qtxt": [
        "Which command displays the current disk space usage for all mounted file systems? (Specify ONLY the",
        "command without any path or parameters.)"
      ],
      "qanswers": [
        {
          "txt": [
            "df"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 12,
      "qtyp": "sc",
      "qtxt": [
        "Which chown command changes the ownership to dave and the group to staff on a file named",
        "data.txt?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. chown dave/staff data.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. chown -u dave -g staff data.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. chown --user dave --group staff data.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. chown dave+staff data.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. chown dave:staff data.txt"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 13,
      "qtyp": "sc",
      "qtxt": [
        "When considering the use of hard links, what are valid reasons not to use hard links?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. Hard links are not available on all Linux systems because traditional filesystems, such as ext4, do not support them"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. Each hard link has individual ownership, permissions and ACLs which can lead to unintended disclosure of file content"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. Hard links are specific to one filesystem and cannot point to files on another filesystem"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. If users other than root should be able to create hard links, suln has to be installed and configured"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. When a hard linked file is changed, a copy of the file is created and consumes additional space"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 14,
      "qtyp": "sc",
      "qtxt": [
        "In compliance with the FHS, in which of the directories are man pages found?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. /opt/man/"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. /usr/doc/"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. /usr/share/man/"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. /var/pkg/man"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. /var/man/"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 15,
      "qtyp": "fi",
      "qtxt": [
        "Which file in the /proc filesystem lists parameters passed from the bootloader to the kernel? (Specify the",
        "file name only without any path.)"
      ],
      "qanswers": [
        {
          "txt": [
            "cmdline"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 16,
      "qtyp": "sc",
      "qtxt": [
        "What is the process ID number of the init process on a System V init based system?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. -1"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. 0"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. 1"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. It is different with each reboot"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. It is set to the current run level"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 17,
      "qtyp": "sc",
      "qtxt": [
        "Which daemon handles power management events on a Linux system?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. acpid"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. batteryd"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. pwrmgntd"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. psd"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. inetd"
          ],
          "correct": false
        }
      ],
      "qcorrect": "A",
      "qinfo": []
    },
    {
      "qid": 18,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following statements are true about the boot sequence of a PC using a BIOS? (Choose",
        "two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. Some parts of the boot process can be configured from the BIOS"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. Linux does not require the assistance of the BIOS to boot a computer"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. The BIOS boot process starts only if secondary storage, such as the hard disk, is functional"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. The BIOS initiates the boot process after turning the computer on"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. The BIOS is started by loading hardware drivers from secondary storage, such as the hard disk"
          ],
          "correct": false
        }
      ],
      "qcorrect": "AD",
      "qinfo": []
    },
    {
      "qid": 19,
      "qtyp": "mc",
      "qtxt": [
        "What is true regarding UEFI firmware? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. It can read and interpret partition tables"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. It can use and read certain file systems"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. It stores its entire configuration on the /boot/ partition"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. It is stored in a special area within the GPT metadata"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. It is loaded from a fixed boot disk position"
          ],
          "correct": false
        }
      ],
      "qcorrect": "BD",
      "qinfo": []
    },
    {
      "qid": 20,
      "qtyp": "sc",
      "qtxt": [
        "A faulty kernel module is causing issues with a network interface card.",
        "Which of the following actions ensures that this module is not loaded automatically when the system",
        "boots?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. Using lsmod --remove --autocleanwithout specifying the name of a specific module"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. Using modinfo -kfollowed by the name of the offending module"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. Using modprobe -rfollowed by the name of the offending module"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. Adding a blacklist line including the name of the offending module to the file /etc/modprobe.d/blacklist.conf"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. Deleting the kernel module’s directory from the file system and recompiling the kernel, including its modules"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 21,
      "qtyp": "mc",
      "qtxt": [
        "When is the content of the kernel ring buffer reset? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. When the ring buffer is explicitly reset using the command dmesg --clear"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. When the ring buffer is read using dmesg without any additional parameters"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. When a configurable amount of time, 15 minutes by default, has passed"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. When the kernel loads a previously unloaded kernel module"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. When the system is shut down or rebooted"
          ],
          "correct": true
        }
      ],
      "qcorrect": "AE",
      "qinfo": []
    },
    {
      "qid": 22,
      "qtyp": "sc",
      "qtxt": [
        "What is the first program the Linux kernel starts at boot time when using System V init?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. /lib/init.so"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. /proc/sys/kernel/init"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. /etc/rc.d/rcinit"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. /sbin/init"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. /boot/init"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 23,
      "qtyp": "sc",
      "qtxt": [
        "A Debian package creates several files during its installation.",
        "Which of the following commands searches for packages owning the file /etc/debian_version?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. apt-get search /etc/debian_version"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. apt -r /etc/debian_version"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. find /etc/debian_version -dpkg"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. dpkg -S  /etc/debian_version"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. apt-file /etc/debian_version"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 24,
      "qtyp": "sc",
      "qtxt": [
        "What is contained on the EFI System Partition?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. The Linux root file system"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. The first stage boot loader"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. The default swap space file"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. The Linux default shell binaries"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. The user home directories"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 25,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following directories on a 64 bit Linux system typically contain shared libraries? (Choose",
        "two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. ~/.lib64/"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. /usr/lib64/"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. /var/lib64/"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. /lib64/"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. /opt/lib64/"
          ],
          "correct": false
        }
      ],
      "qcorrect": "BD",
      "qinfo": []
    },
    {
      "qid": 26,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following files exist in a standard GRUB 2 installation? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. /boot/grub/stages/stage0"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. /boot/grub/i386-pc/lvm.mod"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. /boot/grub/fstab"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. /boot/grub/grub.cfg"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. /boot/grub/linux/vmlinuz"
          ],
          "correct": false
        }
      ],
      "qcorrect": "BD",
      "qinfo": []
    },
    {
      "qid": 27,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands installs all packages with a name ending with the string foo?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. zypper get \"*foo\""
          ],
          "correct": false
        },
        {
          "txt": [
            "B. zypper update \"foo?\""
          ],
          "correct": false
        },
        {
          "txt": [
            "C. zypper force \"foo*\""
          ],
          "correct": false
        },
        {
          "txt": [
            "D. zypper install \"*foo\""
          ],
          "correct": true
        },
        {
          "txt": [
            "E. zypper add \".*foo\""
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 28,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following properties of a Linux system should be changed when a virtual machine is",
        "cloned? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. The partitioning scheme"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. The file system"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. The D-Bus Machine ID"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. The permissions of /root/"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. The SSH host keys"
          ],
          "correct": true
        }
      ],
      "qcorrect": "CE",
      "qinfo": []
    },
    {
      "qid": 29,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands installs GRUB 2 into the master boot record on the third hard disk?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. grub2 install /dev/sdc"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. grub-mkrescue /dev/sdc"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. grub-mbrinstall /dev/sdc"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. grub-setup /dev/sdc"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. grub-install /dev/sdc"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 30,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following partition types is used for Linux swap spaces when partitioning hard disk",
        "drives?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. 7"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. 82"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. 83"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. 8e"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. fd"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 31,
      "qtyp": "mc",
      "qtxt": [
        "What is true regarding the configuration of yum? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. Changes to the repository configuration become active after running yum confupdate"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. Changes to the yum configuration become active after restarting the yumd service"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. The configuration of package repositories can be divided into multiple files"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. Repository configurations can include variables such as $basearch or $releasever"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. In case /etc/yum.repos.d/contains files, /etc/yum.confis ignored"
          ],
          "correct": false
        }
      ],
      "qcorrect": "CD",
      "qinfo": []
    },
    {
      "qid": 32,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following apt-get subcommands installs the newest versions of all currently installed",
        "packages?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. auto-update"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. dist-upgrade"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. full-upgrade"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. install"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. update"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 33,
      "qtyp": "sc",
      "qtxt": [
        "Which command uninstalls a package but keeps its configuration files in case the package is",
        "re-installed?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. dpkg -s pkgname"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. dpkg -L pkgname"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. dpkg -P pkgname"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. dpkg -v pkgname"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. dpkg -r pkgname"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 34,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands lists the dependencies of the RPM package file foo.rpm?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. rpm -qpR foo.rpm"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. rpm -dep foo"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. rpm -ld foo.rpm"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. rpm -R foo.rpm"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. rpm -pD foo"
          ],
          "correct": false
        }
      ],
      "qcorrect": "A",
      "qinfo": []
    },
    {
      "qid": 35,
      "qtyp": "sc",
      "qtxt": [
        "What is the maximum niceness value that a regular user can assign to a process with the nice",
        "command when executing a new process?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. 9"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. 15"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. 19"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. 49"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. 99"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 36,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following commands list all files and directories within the /tmp/ directory and its",
        "subdirectories which are owned by the user root? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. find /tmp -user root -print"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. find -path /tmp -uid root"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. find /tmp -uid root -print"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. find /tmp -user root"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. find -path /tmp -user root -print"
          ],
          "correct": false
        }
      ],
      "qcorrect": "AD",
      "qinfo": []
    },
    {
      "qid": 37,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following are valid stream redirection operators within Bash? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. <"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. #>"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. %>"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. >>>"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. 2>&1"
          ],
          "correct": true
        }
      ],
      "qcorrect": "AE",
      "qinfo": []
    },
    {
      "qid": 38,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following vi commands deletes two lines, the current and the following line?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. d2"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. 2d"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. 2dd"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. dd2"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. de12"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 39,
      "qtyp": "sc",
      "qtxt": [
        "The command dbmaint & was used to run dbmaint in the background.",
        "However, dbmaint is terminated after logging out of the system.",
        "Which alternative dbmaint invocation lets dbmaint continue to run even when the user running the",
        "program logs out?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. job -b dmaint"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. dbmaint &>/dev/pts/null"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. nohup dbmaint &"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. bg dbmaint"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. wait dbmaint"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 40,
      "qtyp": "mc",
      "qtxt": [
        "From a Bash shell, which of the following commands directly execute the instructions from the file",
        "/usr/local/bin/runme.shi without starting a subshell? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. source /usr/local/bin/runme.sh"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. /usr/local/bin/runme.sh"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. /bin/bash /usr/local/bin/runme.sh"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. . /usr/local/bin/runme.sh"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. run /usr/local/bin/runme.sh"
          ],
          "correct": false
        }
      ],
      "qcorrect": "AD",
      "qinfo": []
    },
    {
      "qid": 41,
      "qtyp": "fi",
      "qtxt": [
        "Which program runs a command in specific intervals and refreshes the display of the program’s output?",
        "(Specify ONLY the command without any path or parameters.)"
      ],
      "qanswers": [
        {
          "txt": [
            "watch"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 42,
      "qtyp": "sc",
      "qtxt": [
        "Immediately after deleting 3 lines of text in vi and moving the cursor to a different line, which single",
        "character command will insert the deleted content below the current line?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. i (lowercase)"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. p (lowercase)"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. P (uppercase)"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. U (uppercase)"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. u (lowercase)"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 43,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands changes all CR-LF line breaks in the text file userlist.txt to Linux",
        "standard LF line breaks and stores the result in newlist.txt?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. tr -d '\\r' < userlist.txt > newlist.txt"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. tr -c '\\n\\r' '' <newlist.txt> userlist.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. tr '\\r\\n' '' <userlist.txt> newlist.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. tr '\\r' '\\n' userlist.txt newlist.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. tr -s '/^M/^J/' userlist.txt newlist.txt"
          ],
          "correct": false
        }
      ],
      "qcorrect": "A",
      "qinfo": []
    },
    {
      "qid": 44,
      "qtyp": "sc",
      "qtxt": [
        "Given the following input stream:",
        " txt1.txt ",
        " atxt.txt ",
        " txtB.txt",
        "Which of the following regular expressions turns this input stream into the following output stream?",
        " txt1.bak.txt ",
        " atxt.bak.txt ",
        " txtB.bak.txt"
      ],
      "qanswers": [
        {
          "txt": [
            "A. s/^.txt/.bak/"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. s/txt/bak.txt/"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. s/txt$/bak.txt/"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. s/^txt$/.bak^/"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. s/[.txt]/.bak$1/"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 45,
      "qtyp": "sc",
      "qtxt": [
        "Which command must be entered before exiting vi to save the current file as filea.txt?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. %s filea.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. %w filea.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. :save filea.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. :w filea.txt"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. :s filea.txt"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 46,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following signals is sent to a process when the key combination Ctrl+C is pressed on the",
        "keyboard?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. SIGTERM"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. SIGCONT"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. SIGSTOP"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. SIGKILL"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. SIGINT"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 47,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands displays the output of the foo command on the screen and also",
        "writes it to a file called /tmp/foodata?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. foo | less /tmp/foodata"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. foo | cp /tmp/foodata"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. foo > /tmp/foodata"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. foo | tee /tmp/foodata"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. foo > stdout >> /tmp/foodata"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 48,
      "qtyp": "sc",
      "qtxt": [
        "What output will be displayed when the user fred executes the following command?",
        "  echo 'fred $USER’"
      ],
      "qanswers": [
        {
          "txt": [
            "A. fred fred"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. fred /home/fred/"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. 'fred $USER’"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. fred $USER"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. 'fred fred’"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 49,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands displays the path to the executable file that would be executed when",
        "the command foo is invoked?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. lsattr foo"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. apropos foo"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. locate foo"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. whatis foo"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. which foo"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 50,
      "qtyp": "sc",
      "qtxt": [
        "When redirecting the output of find to the xargs command, what option to find is useful if the filenames",
        "contain spaces?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. -rep-space"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. -printnul"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. -nospace"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. -ignore-space"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. -print0"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 51,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following commands can be used to determine how long the system has been running?",
        "(Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. uptime"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. up"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. time --up"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. uname -u"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. top"
          ],
          "correct": true
        }
      ],
      "qcorrect": "AE",
      "qinfo": []
    },
    {
      "qid": 52,
      "qtyp": "sc",
      "qtxt": [
        "What is true regarding the command",
        "  ls > files ",
        "if files does not exist?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. The output of ls is printed to the terminal"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. files is created and contains the output of ls"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. An error message is shown and ls is not executed"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. The command files is executed and receives the output of ls"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. Any output of ls is discarded"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 53,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following files, located in a user’s home directory, contains the Bash history?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. .bashrc_history"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. .bash_histfile"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. .history"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. .bash_history"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. .history_bash"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 54,
      "qtyp": "mc",
      "qtxt": [
        "Which wildcards will match the following filenames? (Choose two.)",
        " ttyS0",
        " ttyS1",
        " ttyS2"
      ],
      "qanswers": [
        {
          "txt": [
            "A. ttyS[1-5]"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. tty?[0-5]"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. tty*2"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. tty[A-Z][012]"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. tty[Ss][02]"
          ],
          "correct": false
        }
      ],
      "qcorrect": "BD",
      "qinfo": []
    },
    {
      "qid": 55,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands redirects the output of ls to standard error?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. ls >-1"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. ls <<ERR"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. ls >&2"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. ls >>2"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. ls |error"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 56,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands displays the contents of a gzip compressed tar archive?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. gzip archive.tgz | tar xvf"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. tar -fzt archive.tgz"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. gzip -d archive.tgz | tar tvf"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. tar cf archive.tgz"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. tar ztf archive.tgz"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 57,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands prints a list of usernames (first column) and their primary group",
        "(fourth column) from the /etc/passwd file?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. fmt -f 1,4 /etc/passwd"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. cut -d : -f 1,4 /etc/passwd"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. sort -t : -k 1,4 /etc/passwd"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. paste -f 1,4 /etc/passwd"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. split -c 1,4 /etc/passwd"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 58,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following regular expressions represents a single upper-case letter?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. :UPPER:"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. [A-Z]"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. !a-z"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. %C"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. {AZ}"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 59,
      "qtyp": "fi",
      "qtxt": [
        "Which command is used to start another command with a given nice level? (Specify ONLY the command",
        "without any path or parameters.)"
      ],
      "qanswers": [
        {
          "txt": [
            "nice"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 60,
      "qtyp": "sc",
      "qtxt": [
        "Given a log file loga.log with timestamps of the format DD/MM/YYYY:hh:mm:ss, which command filters",
        "out all log entries in the time period between 8:00 am and 8:59 am?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. grep -E ':08:[09]+:[09]+’ loga.log"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. grep -E ':08:[00]+’ loga.log"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. grep -E loga.log ':08:[0-9]+:[0-9]+’"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. grep loga.log ':08:[0-9]:[0-9]’"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. grep -E ':08:[0-9]+:[0-9]+’ loga.log"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 61,
      "qtyp": "mc",
      "qtxt": [
        "Instead of supplying an explicit device in /etc/fstab for mounting, what other options may be used to",
        "identify the intended partition? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. LABEL"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. ID"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. FIND"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. NAME"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. UUID"
          ],
          "correct": true
        }
      ],
      "qcorrect": "AE",
      "qinfo": []
    },
    {
      "qid": 62,
      "qtyp": "sc",
      "qtxt": [
        "A yum repository can declare sets of related packages.",
        "Which yum command installs all packages belonging to the group admintools?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. yum pkgsel --install admintools"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. yum install admintools/*"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. yum groupinstall admintools"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. yum taskinstall admintools"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. yum collection install admintools"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 63,
      "qtyp": "fi",
      "qtxt": [
        "What directory contains configuration files for additional yum repositories? (Specify the full path to the",
        "directory.)"
      ],
      "qanswers": [
        {
          "txt": [
            "/etc/yum.repos.d"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 64,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands installs the GRUB boot files into the currently active file systems and",
        "the boot loader into the first partition of the first disk?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. grub-install /dev/sda"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. grub-install /dev/sda1"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. grub-install current /dev/sda0"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. grub-install /dev/sda0"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. grub-install current /dev/sda1"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 65,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following files are found in the /boot/ filesystem? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. Linux kernel images"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. Bash shell binaries"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. systemd target and service units"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. Initial ramdisk images"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. fsck binaries"
          ],
          "correct": false
        }
      ],
      "qcorrect": "AD",
      "qinfo": []
    },
    {
      "qid": 66,
      "qtyp": "sc",
      "qtxt": [
        "Which file defines the network locations from where the Debian package manager downloads software",
        "packages?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. /etc/dpkg/dpkg.cfg"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. /etc/apt/apt.conf.d"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. /etc/apt/apt.conf"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. /etc/dpkg/dselect.cfg"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. /etc/apt/sources.list"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 67,
      "qtyp": "sc",
      "qtxt": [
        "When removing a package on a system using dpkg package management, which dpkg option ensures",
        "configuration files are removed as well?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. --clean"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. --purge"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. --vacuum"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. --remove"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. --declare"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 68,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following statements are correct when comparing Linux containers with traditional virtual",
        "machines (e.g. LXC vs. KVM)? (Choose three.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. Containers are a lightweight virtualization method where the kernel controls process isolation and resource management."
          ],
          "correct": true
        },
        {
          "txt": [
            "B. Fully virtualized machines can run any operating system for a specific hardware architecture within the virtual machine."
          ],
          "correct": true
        },
        {
          "txt": [
            "C. Containers are completely decoupled from the host system’s physical hardware and can only use emulated virtual hardware devices."
          ],
          "correct": false
        },
        {
          "txt": [
            "D. The guest environment for fully virtualized machines is created by a hypervisor which provides virtual and emulated hardware devices."
          ],
          "correct": true
        },
        {
          "txt": [
            "E. Containers on the same host can use different operating systems, as the container hypervisor creates separate kernel execution."
          ],
          "correct": false
        }
      ],
      "qcorrect": "ABD",
      "qinfo": []
    },
    {
      "qid": 69,
      "qtyp": "sc",
      "qtxt": [
        "The installation of a local Debian package failed due to unsatisfied dependencies.",
        "Which of the following commands installs missing dependencies and completes the interrupted package",
        "installation?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. dpkg --fix --all"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. apt-get autoinstall"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. dpkg-reconfigure --all"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. apt-get all"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. apt-get install -f"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 70,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands lists all currently installed packages when using RPM package",
        "management?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. yum --query --all"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. yum --list --installed"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. rpm --query --list"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. rpm --list --installed"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. rpm --query --all"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 71,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following commands are valid in the GRUB 2 configuration file? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. menuentry"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. uefi"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. pxe-ifconfig"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. insmod"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. kpartx"
          ],
          "correct": false
        }
      ],
      "qcorrect": "AD",
      "qinfo": []
    },
    {
      "qid": 72,
      "qtyp": "sc",
      "qtxt": [
        "What is the purpose of the ldd command?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. It lists which shared libraries a binary needs to run."
          ],
          "correct": true
        },
        {
          "txt": [
            "B. It installs and updates installed shared libraries."
          ],
          "correct": false
        },
        {
          "txt": [
            "C. It turns a dynamically linked binary into a static binary."
          ],
          "correct": false
        },
        {
          "txt": [
            "D. It defines which version of a library should be used by default."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. It runs a binary with an alternate library search path."
          ],
          "correct": false
        }
      ],
      "qcorrect": "A",
      "qinfo": []
    },
    {
      "qid": 73,
      "qtyp": "mc",
      "qtxt": [
        "What can the Logical Volume Manager (LVM) be used for? (Choose three.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. To create snapshots."
          ],
          "correct": true
        },
        {
          "txt": [
            "B. To dynamically change the size of logical volumes."
          ],
          "correct": true
        },
        {
          "txt": [
            "C. To dynamically create or delete logical volumes."
          ],
          "correct": true
        },
        {
          "txt": [
            "D. To create RAID 9 arrays."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. To encrypt logical volumes."
          ],
          "correct": false
        }
      ],
      "qcorrect": "ABC",
      "qinfo": []
    },
    {
      "qid": 74,
      "qtyp": "mc",
      "qtxt": [
        "What are the main differences between GPT and MBR partition tables regarding maximum number",
        "and size of partitions? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. MBR can handle partition sizes up to 4 TB, whereas GPT supports partition sizes up to 128 ZB."
          ],
          "correct": false
        },
        {
          "txt": [
            "B. By default, GPT can manage up to 128 partitions while MBR only supports four primary partitions."
          ],
          "correct": true
        },
        {
          "txt": [
            "C. By default, GPT can manage up to 64 partitions while MBR only supports 16 primary partitions."
          ],
          "correct": false
        },
        {
          "txt": [
            "D. MBR can handle partition sizes up to 2.2 TB, whereas GPT supports sizes up to 9.4 ZB."
          ],
          "correct": true
        },
        {
          "txt": [
            "E. Both GPT and MBR support up to four primary partitions, each with up to 4096 TB."
          ],
          "correct": false
        }
      ],
      "qcorrect": "BD",
      "qinfo": []
    },
    {
      "qid": 75,
      "qtyp": "mc",
      "qtxt": [
        "A backup software heavily uses hard links between files which have not been changed in between two",
        "backup runs.",
        "Which benefits are realized due to these hard links? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. The old backups can be moved to slow backup media, such as tapes, while still serving as hard link target in new backups."
          ],
          "correct": false
        },
        {
          "txt": [
            "B. The backup runs faster because hard links are asynchronous operations, postponing the copy operation to a later point in time."
          ],
          "correct": false
        },
        {
          "txt": [
            "C. The backup is guaranteed to be uncharged because a hard linked file cannot be modified after its creation."
          ],
          "correct": false
        },
        {
          "txt": [
            "D. The backup consumes less space because the hard links point to the same data on disk instead of storing redundant copies."
          ],
          "correct": true
        },
        {
          "txt": [
            "E. The backup runs faster because, instead of copying the data of each file, hard links only change file system meta data."
          ],
          "correct": true
        }
      ],
      "qcorrect": "DE",
      "qinfo": []
    },
    {
      "qid": 76,
      "qtyp": "fi",
      "qtxt": [
        "Which file from the /proc/ filesystem contains a list of all currently mounted devices? (Specify the full",
        "name of the file, including path.)"
      ],
      "qanswers": [
        {
          "txt": [
            "/proc/mounts"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 77,
      "qtyp": "sc",
      "qtxt": [
        "How many fields are in a syntactically correct line of /etc/fstab?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. 3"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. 4"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. 5"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. 6"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. 7"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 78,
      "qtyp": "mc",
      "qtxt": [
        "Running chmod 640 filea.txt as a regular user doesn’t update filea.txt’s permission.",
        "What might be a reason why chmod cannot modify the permissions? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. filea.txt is owned by another user and a regular user cannot change the permissions of another user’s file."
          ],
          "correct": true
        },
        {
          "txt": [
            "B. filea.txt is a symbolic link whose permissions are a fixed value which cannot be changed."
          ],
          "correct": true
        },
        {
          "txt": [
            "C. filea.txt has the sticky bit set and a regular user cannot remove this permission."
          ],
          "correct": false
        },
        {
          "txt": [
            "D. filea.txt is a hard link whose permissions are inherited from the target and cannot be set directly."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. filea.txt has the SetUID bit set which imposes the restriction that only the root user can make changes to the file."
          ],
          "correct": false
        }
      ],
      "qcorrect": "AB",
      "qinfo": []
    },
    {
      "qid": 79,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following Linux filesystems preallocate a fixed number of inodes when creating a new",
        "filesystem instead of generating them as needed? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. JFS"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. ext3"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. XFS"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. ext2"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. procfs"
          ],
          "correct": false
        }
      ],
      "qcorrect": "BD",
      "qinfo": []
    },
    {
      "qid": 80,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands sets the SetUID permission on the executable /bin/foo?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. chmod 4755 /bin/foo"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. chmod 1755 /bin/foo"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. chmod u-s /bin/foo"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. chmod 755+s /bin/foo"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. chmod 2755 /bin/foo"
          ],
          "correct": false
        }
      ],
      "qcorrect": "A",
      "qinfo": []
    },
    {
      "qid": 81,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following commands can be used to display the inode number of a given file? (Choose",
        "two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. inode"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. ln"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. ls"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. cp"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. stat"
          ],
          "correct": true
        }
      ],
      "qcorrect": "CE",
      "qinfo": []
    },
    {
      "qid": 82,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following settings for umask ensures that new files have the default permissions -rw-r-----?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. 0017"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. 0640"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. 0038"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. 0227"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. 0027"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 83,
      "qtyp": "sc",
      "qtxt": [
        "After a power outage, the XFS file system of /dev/sda3 is inconsistent.",
        "How can the existing file system errors be fixed?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. By using mount -f to force a mount of the file system"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. By running xfsck on the file system"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. By mounting the file system with the option xfs_repair"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. By running xfsadmin repairon the file system"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. By running xfs_repair on the file system"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 84,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following properties of an existing file changes when a hard link pointing to that file is",
        "created?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. File size"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. Link count"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. Modify timestamp"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. Inode number"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. Permissions"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 85,
      "qtyp": "fi",
      "qtxt": [
        "Following the Filesystem Hierarchy Standard (FHS), where should binaries that have been compiled by",
        "the system administrator be placed in order to be made available to all users on the system? (Specify the",
        "full path to the directory.)"
      ],
      "qanswers": [
        {
          "txt": [
            "/usr/local/bin"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 86,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands show how the shell handles a specific command?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. where"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. type"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. stat"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. case"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. fileinfo"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 87,
      "qtyp": "sc",
      "qtxt": [
        "When in Normal mode in vi, which character can be used to begin a reverse search of the text?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. r"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. /"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. F"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. ?"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. s"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 88,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands displays the manual page command from section 1?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. man command(1)"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. man command@1"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. man 1 command"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. man 1.command"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. man -s 1 command"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 89,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands creates or, in case it already exists, overwrites a file called data with",
        "the output of ls?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. ls 3> data"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. ls >& data"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. ls > data"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. ls >> data"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. ls >>> data"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 90,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands is used to change options and positional parameters within a",
        "running Bash shell?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. history"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. setsh"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. bashconf"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. set"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. envsetup"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 91,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following commands display the IDs of all processes owned by root? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. pgrep -c root"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. pgrep -u root"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. pgrep -f root"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. pgrep -U 0"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. pgrep -c 0"
          ],
          "correct": false
        }
      ],
      "qcorrect": "BD",
      "qinfo": []
    },
    {
      "qid": 92,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following sequences in the vi editor saves the opened document and exits the editor?",
        "(Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. Ctrl XX"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. Ctrl :W"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. Esc zz"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. Esc :wq"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. Esc ZZ"
          ],
          "correct": true
        }
      ],
      "qcorrect": "DE",
      "qinfo": []
    },
    {
      "qid": 93,
      "qtyp": "sc",
      "qtxt": [
        "What is the effect of the -v option for the grep command?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. It enables color to highlight matching parts."
          ],
          "correct": false
        },
        {
          "txt": [
            "B. It shows the command’s version information."
          ],
          "correct": false
        },
        {
          "txt": [
            "C. It only outputs non-matching lines."
          ],
          "correct": true
        },
        {
          "txt": [
            "D. It changes the output order showing the last matching line first."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. It outputs all lines and prefixes matching lines with a+."
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 94,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following tools can show the complete path of an executable file that the current shell",
        "would execute when starting a command without specifying its complete path? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. find"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. pwd"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. which"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. locate"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. type"
          ],
          "correct": true
        }
      ],
      "qcorrect": "CE",
      "qinfo": []
    },
    {
      "qid": 95,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following signals is sent to a process when the key combination Ctrl+Z is pressed on the",
        "keyboard?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. SIGTERM"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. SIGCONT"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. SIGSTOP"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. SIGKILL"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. SIGINT"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 96,
      "qtyp": "sc",
      "qtxt": [
        "What is the output when the regular expression 's/[ABC][abc]/xx/' is applied to the following string?",
        " ABCabc"
      ],
      "qanswers": [
        {
          "txt": [
            "A. ABxxbc"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. xxCxxc"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. xxxxxx"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. ABCabc"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. Axxaxx"
          ],
          "correct": false
        }
      ],
      "qcorrect": "A",
      "qinfo": []
    },
    {
      "qid": 97,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following commands print the current working directory when using a Bash shell?",
        "(Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. echo \"${PWD}\""
          ],
          "correct": true
        },
        {
          "txt": [
            "B. echo \"${WD}\""
          ],
          "correct": false
        },
        {
          "txt": [
            "C. printwd"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. pwd"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. echo \"${pwd}\""
          ],
          "correct": false
        }
      ],
      "qcorrect": "AD",
      "qinfo": []
    },
    {
      "qid": 98,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands outputs test to the shell?",
        "++++++++++++++++++++++++++++++++++++++++++++++++++"
      ],
      "qanswers": [
        {
          "txt": [
            "A.  cat <!EOT ",
            "  test",
            "  EOT"
          ],
          "correct": false
        },
        {
          "txt": [
            "B.  cat <|EOT "
          ],
          "correct": false
        },
        {
          "txt": [
            "C.  cat !<EOT"
          ],
          "correct": false
        },
        {
          "txt": [
            "D.  cat &<EOT"
          ],
          "correct": false
        },
        {
          "txt": [
            "E.  cat <<EOT"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 99,
      "qtyp": "sc",
      "qtxt": [
        "What is the default nice level when a process is started using the nice command?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. -10"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. 0"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. 10"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. 15"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. 20"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 100,
      "qtyp": "sc",
      "qtxt": [
        "A user accidentally created the subdirectory \\dir in his home directory.",
        "Which of the following commands will remove that directory?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. rmdir ~/\\\\dir"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. rmdir \"~/\\dir\""
          ],
          "correct": false
        },
        {
          "txt": [
            "C. rmdir ~/’dir’"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. rmdir ~/\\dir"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. rmdir '~/\\dir’"
          ],
          "correct": false
        }
      ],
      "qcorrect": "A",
      "qinfo": []
    },
    {
      "qid": 101,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands can perform searches on file contents using regular expressions?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. find"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. locate"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. grep"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. reggrep"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. pgrep"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 102,
      "qtyp": "sc",
      "qtxt": [
        "In a nested directory structure, which find command line option would be used to restrict the",
        "command to searching down a particular number of subdirectories?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. -maxdepth"
          ],
          "correct": true
        },
        {
          "txt": [
            "B. -dirmax"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. -maxlevels"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. -s"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. -n"
          ],
          "correct": false
        }
      ],
      "qcorrect": "A",
      "qinfo": []
    },
    {
      "qid": 103,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands determines a file’s format by using a definition database file which",
        "contains information about all common file types?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. type"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. file"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. magic"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. pmagic"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. hash"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 104,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands generates a list of user names from /etc/passwd along with their",
        "login shell?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. column -s : 1,7 /etc/passwd"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. chop -c 1,7 /etc/passwd"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. colrm 1,7 /etc/passwd"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. sort -t: -k1,7 /etc/passwd"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. cut -d: -f1,7 /etc/passwd"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 105,
      "qtyp": "sc",
      "qtxt": [
        "If the gzip compressed tar archive texts.tgz contains the files a.txt and b.txt, which files will be present",
        "in the current directory after running gunzip texts.tgz?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. Only a.txt, b.txt, and texts.tgz"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. Only texts.tar and texts.tgz"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. Only a.txt.gz and b.txt.gz"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. Only a.txt and b.txt"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. Only texts.tar"
          ],
          "correct": true
        }
      ],
      "qcorrect": "E",
      "qinfo": []
    },
    {
      "qid": 106,
      "qtyp": "sc",
      "qtxt": [
        "In the vi editor, how can commands such as moving the cursor or copying lines into the buffer be",
        "issued multiple times or applied to multiple rows?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. By using the command :repeat followed by the number and the command"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. By specifying the number right in front of a command such as 4l or 2yj."
          ],
          "correct": true
        },
        {
          "txt": [
            "C. By selecting all affected lines using the shit and cursor keys before applying the command."
          ],
          "correct": false
        },
        {
          "txt": [
            "D. By issuing a command such as :set repetition=4 with repeats every subsequent command 4 times."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. By specifying the number after a command such as l4 or yj2 followed by escape."
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 107,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following statements is correct for a command ending with an & character?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. The command’s output is redirected to /dev/null."
          ],
          "correct": false
        },
        {
          "txt": [
            "B. The command is run in background of the current shell."
          ],
          "correct": true
        },
        {
          "txt": [
            "C. The command’s output is executed by the shell."
          ],
          "correct": false
        },
        {
          "txt": [
            "D. The command is run as a direct child of the init process."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. The command’s input is read from /dev/null."
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 108,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands reads a file and creates separate chunks of a given size from the",
        "file’s contents?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. ar"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. cat"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. break"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. split"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. parted"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 109,
      "qtyp": "sc",
      "qtxt": [
        "What is the purpose of the xargs command?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. It passes arguments to an X server."
          ],
          "correct": false
        },
        {
          "txt": [
            "B. It repeats the execution of a command using different parameters for each invocation."
          ],
          "correct": false
        },
        {
          "txt": [
            "C. It reads standard input and builds up commands to execute."
          ],
          "correct": true
        },
        {
          "txt": [
            "D. It asks a question, graphically, and returns the answer to the shell."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. It allows specifying long options (like --help) for commands that normally only accept short options (like -h)"
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 110,
      "qtyp": "fi",
      "qtxt": [
        "Which command displays a list of all background tasks running in the current shell? (Specify ONLY the",
        "command without any path or parameters.)"
      ],
      "qanswers": [
        {
          "txt": [
            "jobs"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 111,
      "qtyp": "fi",
      "qtxt": [
        "Which command is used to change the priority of an already running process? (Specify ONLY the",
        "command without any path or parameters.)"
      ],
      "qanswers": [
        {
          "txt": [
            "renice"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 112,
      "qtyp": "sc",
      "qtxt": [
        "In Bash, inserting 1>&2 after a command redirects…"
      ],
      "qanswers": [
        {
          "txt": [
            "A. …standard error to standard input."
          ],
          "correct": false
        },
        {
          "txt": [
            "B. …standard output to standard error."
          ],
          "correct": true
        },
        {
          "txt": [
            "C. …standard input to standard error."
          ],
          "correct": false
        },
        {
          "txt": [
            "D. …standard error to standard output."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. …standard output to standard input."
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 113,
      "qtyp": "sc",
      "qtxt": [
        "When booting from the hard disk, a computer successfully loads the Linux kernel and initramfs but",
        "hangs during the subsequent startup tasks. The system is booted using a Linux based rescue CD to",
        "investigate the problem.",
        "Which of the following methods helps to identify the root cause of the problem?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. Using the dmesg command from the rescue CD’s shell to view the original system’s boot logs."
          ],
          "correct": false
        },
        {
          "txt": [
            "B. Investigating the file /proc/kmsg on the computer’s hard disk for possible errors."
          ],
          "correct": false
        },
        {
          "txt": [
            "C. Investigating the files in /var/log on the computer’s hard disk for possible errors."
          ],
          "correct": true
        },
        {
          "txt": [
            "D. Using chroot to switch to the file system on the hard disk and use dmesg to view the logs."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. Rebooting again from the hard drive since the system successfully booted from the rescue CD."
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 114,
      "qtyp": "sc",
      "qtxt": [
        "Where is the bootloader stored on the hard disk of a UEFI system?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. In the EFI Boot Record (EBR)."
          ],
          "correct": false
        },
        {
          "txt": [
            "B. In the Master Boot Record (MBR)."
          ],
          "correct": false
        },
        {
          "txt": [
            "C. On the EFI System Partition (ESP)."
          ],
          "correct": true
        },
        {
          "txt": [
            "D. On the partition labeled boot."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. On the partition number 127."
          ],
          "correct": false
        }
      ],
      "qcorrect": "C",
      "qinfo": []
    },
    {
      "qid": 115,
      "qtyp": "sc",
      "qtxt": [
        "What is the correct way to set the default systemd boot target to multi-user?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. systemctl isolate multi-user.target"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. systemctl set-runlevel multi-user.target"
          ],
          "correct": false
        },
        {
          "txt": [
            "C. systemctl set-boot multi-user.target"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. systemctl set-default multi-user.target"
          ],
          "correct": true
        },
        {
          "txt": [
            "E. systemctl boot -p multi-user.target"
          ],
          "correct": false
        }
      ],
      "qcorrect": "D",
      "qinfo": []
    },
    {
      "qid": 116,
      "qtyp": "mc",
      "qtxt": [
        "Which of the following statements are correct about the initial RAM disk involved in the boot process",
        "of Linux? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. An initramfs is a compressed file system archive, which can be unpacked to examine its contents."
          ],
          "correct": true
        },
        {
          "txt": [
            "B. An initramfs file contains the MBR, the bootloader and the Linux kernel."
          ],
          "correct": false
        },
        {
          "txt": [
            "C. After a successful boot, the initramfs contents are available in /run/initramfs/."
          ],
          "correct": false
        },
        {
          "txt": [
            "D. The kernel uses the initramfs temporarily before accessing the real root file system."
          ],
          "correct": true
        },
        {
          "txt": [
            "E. An initramfs does not depend on a specific kernel version and is not changed after the initial installation."
          ],
          "correct": false
        }
      ],
      "qcorrect": "AD",
      "qinfo": []
    },
    {
      "qid": 117,
      "qtyp": "sc",
      "qtxt": [
        "Which of the following commands loads a kernel module along with any required dependency",
        "modules?"
      ],
      "qanswers": [
        {
          "txt": [
            "A. depmod"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. modprobe"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. module_install"
          ],
          "correct": false
        },
        {
          "txt": [
            "D. insmod"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. loadmod"
          ],
          "correct": false
        }
      ],
      "qcorrect": "B",
      "qinfo": []
    },
    {
      "qid": 118,
      "qtyp": "mc",
      "qtxt": [
        "What information can the lspci command display about the system hardware? (Choose three.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. System battery type"
          ],
          "correct": false
        },
        {
          "txt": [
            "B. Device IRQ settings"
          ],
          "correct": true
        },
        {
          "txt": [
            "C. PCI bus speed"
          ],
          "correct": true
        },
        {
          "txt": [
            "D. Ethernet MAC address"
          ],
          "correct": false
        },
        {
          "txt": [
            "E. Device vendor identification"
          ],
          "correct": true
        }
      ],
      "qcorrect": "BCE",
      "qinfo": []
    },
    {
      "qid": 119,
      "qtyp": "fi",
      "qtxt": [
        "Which System V init configuration file is commonly used to set the default run level? (Specify the full",
        "name of the file, including path.)"
      ],
      "qanswers": [
        {
          "txt": [
            "/etc/inittab"
          ]
        }
      ],
      "qinfo": []
    },
    {
      "qid": 120,
      "qtyp": "mc",
      "qtxt": [
        "Given the following two symbolic links in a System V init configuration:",
        " /etc/rc1.d/K01apache2",
        " /etc/rc2.d/S02apache2",
        "When are the scripts executed that are referenced by these links? (Choose two.)"
      ],
      "qanswers": [
        {
          "txt": [
            "A. S02apache2 is run when runlevel 2 is entered."
          ],
          "correct": true
        },
        {
          "txt": [
            "B. S02apache2 is run when runlevel 2 is left."
          ],
          "correct": false
        },
        {
          "txt": [
            "C. K01apache2 is never run because K indicates a deactivated service."
          ],
          "correct": false
        },
        {
          "txt": [
            "D. Both S02apache2 and K01apache2 are run during a system shutdown."
          ],
          "correct": false
        },
        {
          "txt": [
            "E. K01apache2 is run when runlevel 1 is entered."
          ],
          "correct": true
        }
      ],
      "qcorrect": "AE",
      "qinfo": [
  
      ]
    }
  ];

  constructor() { }

  getQuestions() {
    return this.questions;
  }
}
