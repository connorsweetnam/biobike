;;; FUNCTIONS FOR What-is-the-genetic-code TOUR
;   These functions are available to students but the code is not

(DEFPACKAGE sticks-world)
(IN-PACKAGE sticks-world)
(USE-PACKAGE 'BioLisp)
(USE-PACKAGE 'BioLite)

(DEFUN One-more-than (bundle)
 "(ONE-MORE-THAN bundle-of-sticks)
   - Returns a bundle with one more stick
   - A bundle of sticks consists of 0 or more 
       instances of \"|\"
   - EXAMPLE:
       (ONE-MORE-THAN \"||||\")   ==> \"|||||\"
 "
   (IF-FALSE (STRINGP bundle)
       THEN (ERROR "Input to ONE-MORE-THAN must be a string!"))
   (LET* ((count (COUNT-OF "|" IN bundle))
          (new-bundle (MAKE-STRING (1+ count) :INITIAL-ELEMENT #\|)))         
      new-bundle))
  
(DEFUN One-less-than (bundle)
   (IF-FALSE (STRINGP bundle)
       THEN (ERROR "Input to ONE-LESS-THAN must be a string!"))
   (LET* ((result "")
          (count (COUNT-OF "|" IN bundle))
          (new-bundle 
             (IF-TRUE (> count 1)
                 THEN (MAKE-STRING (- count 1) :INITIAL-ELEMENT #\|) 
                 ELSE ""))
          )         
      new-bundle))
                   
(EXPORT '(One-more-than One-less-than))